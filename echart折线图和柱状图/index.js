var line_chart = document.getElementById("line-chart");
var bar_chart = document.getElementById("bar-chart");
var myChart1 = echarts.init(line_chart,'customed');
var myChart2 = echarts.init(bar_chart,'customed');
var option1 = null;
var option2 = null;
option1 = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {                     //图例
        x:"center",
        y:"bottom",
        padding:10,
        data:['总部总监正职','部门正职','大区正职'],  //内容必须与series的name一一对应，否则不显示
        color:['#c23531','#2f4554','#61a0a8','#d48265','#91c7ae'], //图示的线条颜色，一一对应，这里只用了前三种，以此类推
        textStyle: {
            color: ['#c23531','#2f4554','#61a0a8','#d48265','#91c7ae']//图示的字体颜色，一一对应，这里只用了前三种，以此类推
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            // saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['客户导向','战略思维','专业引领','带领团队','沟通合作','高效执行','规则意识','忠诚务实','创业激情'],
        axisLabel:{
            interval: 0,
            rotate:40
        },
        textStyle:{
            color:'#5299d7'
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'总部总监正职',
            type:'line',
            stack: '总部总监正职',
            data:[95,96,84,85,95,75,85,89,91]
        },
        {
            name:'部门正职',
            type:'line',
            stack: '部门正职',
            data:[98,89,97,78,96,85,78,97,94]
        },
        {
            name:'大区正职',
            type:'line',
            stack: '大区正职',
            data:[84,85,87,89,98,97,95,96,86,85]
        }
    ]
};
option2 = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            // saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['客户导向','战略思维','专业引领','带领团队','沟通合作','高效执行','规则意识','忠诚务实','创业激情'],
        axisLabel:{
            interval: 0,
            // rotate:40
        },
        textStyle:{
            color:'#5299d7'
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'平均分',
            type:'bar',
            barWidth:30,
            stack: '平均分',
            data:[95,96,84,85,95,75,85,89,91],
            itemStyle: {   
                //通常情况下：
                normal:{  
　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function (params){
                        var colorList = ['#c23531','#2f4554','#61a0a8','#d48265','#91c7ae','#5299d7','#5211d7','#5261d7','#1199d7'];
                        return colorList[params.dataIndex];
                    }
                },
                //鼠标悬停时：
                emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
    }
    ]
};
if (option1 && typeof option1 === "object") {
    myChart1.setOption(option1, true);
}
if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2, true);
}