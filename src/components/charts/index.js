import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Radio, Select, DatePicker} from 'antd';
import moment from 'moment';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import './index.css';

const { RangePicker } = DatePicker;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class EchartsDemo extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    static defaultProps = {
        articles: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
        ]
    };

    state = {
        value: 1,
        loading: false
    };

    constructor(props) {
        super(props);
        this.sDate = moment();
    }

    onPointChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
            loading: true
        });

        // setTimeout(() => {
        //     this.setState({
        //         loading: false
        //     });
        // }, 1000);
    }

    handleChange = value => {
        console.log(`selected ${value}`);
    }

    handleBlur = () => {
        console.log('blur');
    }

    handleFocus = () => {
        console.log('focus');
    }

    // 时间取到十天内的数据
    // disabledDate = (d) => {
    //     if(d >= this.sDate) {
    //         return d >= Math.min(moment(), moment(this.sDate).add(10, 'days'));
    //     }
    //     return d <= moment(this.sDate).subtract(10, 'days');
    // }

    dateRangeChange = (dates, dateStrings) => {
        console.log(dates);
        console.log(dateStrings);
    }

    onCalendarChange = (dates, dateStrings) => {
        console.log(dates);
        console.log(dateStrings);
        this.sDate = dates && dates.length ? dates[0] : moment();
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['最高气温', '最低气温']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            series: [{
                name: '最高气温',
                type: 'line',
                data: [11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            }, {
                name: '最低气温',
                type: 'line',
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [
                        { name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' },
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                normal: {
                                    position: 'start',
                                    formatter: '最大值'
                                }
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }]
        });
    }

    render() {
        return (
            <div className="topic-container">
                <div className="topic-left-content">
                    <div className="select-container">
                        <Select showSearch style={{ width: 200 }} defaultValue="afb"
                            placeholder="选择一种测量项"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            <Option value="afb">Axial Force Bolt</Option>
                            <Option value="pc">Peripheral Convergence</Option>
                            <Option value="sg">Strain Gauge</Option>
                            <Option value="ssr">Supporting Surrounding Rock</Option>
                            <Option value="ss">Surface Subsidence</Option>
                            <Option value="vs">Vault Settlement</Option>
                        </Select>
                        <RadioGroup onChange={this.onPointChange} value={this.state.value}>
                            <Radio value={1}>点1</Radio>
                            <Radio value={2}>点2</Radio>
                            <Radio value={3}>点3</Radio>
                            <Radio value={4}>点4</Radio>
                            <Radio value={5}>点5</Radio>
                            <Radio value={6}>点6</Radio>
                            <Radio value={7}>点7</Radio>
                            <Radio value={8}>点8</Radio>
                        </RadioGroup>

                        <RangePicker format="YYYY-MM-DD"
                            onChange={this.dateRangeChange}
                            onCalendarChange={this.onCalendarChange} />
                    </div>
                    {/* wrapperClassName="map-loading-spin" */}
                    <div className="map-container">
                        <div id="main" className="map-content" />
                        {/* <div className="map-loading-spin">
                            <Spin spinning={this.state.loading} size="large"></Spin>
                        </div> */}
                    </div>

                </div>

                <div className="topic-right-content">

                </div>
            </div>
        );
    }
}

export default EchartsDemo;