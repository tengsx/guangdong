var guangdongMap=[{
  name: '广州市',
  coord: [113.264360,23.129080],
}, {
  name: '深圳市',
  coord: [114.059560,22.542860]
}, {
  name: '珠海市',
  coord: [113.576680,22.270730]
}, {
  name: '汕头市',
  coord: [116.682210,23.353500]
}, {
  name: '佛山市',
  coord: [113.121920,23.021850]
}, {
  name: '韶关市',
  coord: [113.597230,24.810390]
}, {
  name: '湛江市',
  coord: [110.358940,21.271340]
}, {
  name: '肇庆市',
  coord: [112.465280,23.046900]
}, {
  name: '江门市',
  coord: [113.081610,22.578650]
}, {
  name: '茂名市',
  coord: [110.925230,21.663290]
}, {
  name: '惠州市',
  coord: [114.416790,23.110750]
}, {
  name: '梅州市',
  coord: [116.122640,24.288440]
}, {
  name: '汕尾市',
  coord: [115.375140,22.785660]
}, {
  name: '河源市',
  coord: [114.700650,23.743650]
}, {
  name: '阳江市',
  coord: [111.982560,21.858290]
}, {
  name: '清远市',
  coord: [113.056150,23.682010]
}, {
  name: '东莞市',
  coord: [113.751790,23.020670]
}, {
  name: '中山市',
  coord: [113.392600,22.515950]
}, {
  name: '潮州市',
  coord: [116.622960,23.656700]
}, {
  name: '揭阳市',
  coord: [116.372710,23.549720]
}, {
  name: '云浮市',
  coord: [112.044530,22.915250]
}];
var huizhouMap=[{
  name: '惠城区',
  coord: [114.382730,23.083830],
}, {
  name: '惠阳区',
  coord: [114.456460,22.788510]
}, {
  name: '博罗县',
  coord: [114.289730,23.173150]
}, {
  name: '龙门县',
  coord: [114.254860,23.727630]
}, {
  name: '惠东县',
  coord: [114.719990,22.984860]
}];
	//map数据转换
function convertData(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
      res.push({
          name: data[i].name,
          value: [data[i].coord[0], data[i].coord[1], Math.ceil(Math.random() * 100)],
          invest:Math.ceil(Math.random() * 1100)
      });
  }
  return res;
};
$(function(){
  var time=$('#time'),t;
  time.text(getTime());
	autoTime();
	function autoTime(){
		clearInterval(t);
		t=setInterval(function(){
			time.text(getTime());
			autoTime();
		},1000);
	}
})
//获取当前时间时间
function getTime(){
	const date =new Date()
	const year = date.getFullYear();
  	const month = formatNumber(date.getMonth() + 1);
  	const day = formatNumber(date.getDate());
 	const hour = formatNumber(date.getHours());
  	const minute = formatNumber(date.getMinutes());
  	const second = formatNumber(date.getSeconds());
  	return `${year}.${month}.${day}  ${hour}:${minute}:${second}`
}
//格式化时间
function formatNumber(n){
  n = n.toString()
  return n[1] ? n : '0' + n
}
//echarts字体自适应
function fontSize(res){
  let docEl = document.documentElement,
      clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = 100 * (clientWidth / 1920);
  return res*fontSize;

}
  //单击延时触发
  var clickTimeId;
 
  /*
   * 页面初始化
   */
  onload() ;
  function onload() {
    document.addEventListener('click', onDocumentClick);
    document.addEventListener('dblclick', onDocumenDblClick);
  }

  /*
   * 鼠标单击事件响应
   * event 鼠标事件对象
   */
  function onDocumentClick(event) {
    // 取消上次延时未执行的方法
    clearTimeout(clickTimeId);
    //执行延时
    clickTimeId = setTimeout(function() {
      //此处为单击事件要执行的代码
      console.log("鼠标单击");
    }, 250);
  }

  /*
   * 鼠标双击事件响应
   * event 鼠标事件对象
   */
  function onDocumenDblClick(event) {
    // 取消上次延时未执行的方法
    clearTimeout(clickTimeId);
    console.log("鼠标双击");
  }
  //返回主页
  function backTo(){
    window.location.href='menu.html';
  }
  //模块选选择
  function chooseModlue(that){
   var modlueData=[
      {
        name:'中央预算内投资项目展示',
        href:'centralInvest.html'
      },
      {
        name:'重点项目计划展示',
        href:'importantProject.html'
      },
      {
        name:'在线审批平台项目展示',
        href:'onlineApproval.html'
      },
      {
        name:'PPP项目展示',
        href:'pppProject.html'
      },
      {
        name:'一核一带一区项目展示',
        href:'OCOZ.html'
      },
      {
        name:'民间资本推荐项目展示',
        href:'privateCapital.html'
      },
      {
        name:'粤港澳大湾区项目展示',
        href:'guangdongDistrict.html'
      },
      {
        name:'补短板项目展示',
        href:'patchWeakness.html'
      },
      {
        name:'项目总览',
        href:'systemPandect.html'
      }
    ]
    var checkText=$(that).find("option:selected").text();
    for(var i =0;i<modlueData.length;i++){
      if(checkText==modlueData[i].name){
        window.location.href=modlueData[i].href;
      }
    }
  }