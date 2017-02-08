var area;

$(document).ready(function(){
	$("#areaA").on("click", function(e) {
		e.preventDefault(); 
		area="tstaArray";
		changetable(tstaArray);		
	});
	$("#areaB").on("click", function(e) {
		e.preventDefault();
		area="tstbArray";
		changetable(tstbArray);
	});
	$("#areaC").on("click", function(e) {
		e.preventDefault();
		area="tstcArray";
		changetable(tstcArray);
	});
	$("#areaD").on("click", function(e) {
		e.preventDefault();
		area="tstdArray";
		changetable(tstdArray);
	});
	$("#areaE").on("click", function(e) {
		e.preventDefault();
		area="tsteArray";
		changetable(tsteArray);
	});
		$("#areaF").on("click", function(e) {
		e.preventDefault();
		area="tstfArray";
		changetable(tstfArray);
	});

});

function changemap(pic) {
document.getElementById('myImage').src = pic;
}

var tstaArray = [
  ["冠華中心","麼地道", 220,0],
  ["帝國中心","麼地道", 100,0],
  ["華懋廣場","麼地道", 170,0],
  ["東海商業中心","加連威老道", 160,0],
  ["幸福中心","加連威老道", 110,0],
  ["明輝中心","加連威老道", 30,0],
  ["港晶中心","加連威老道", 160,0],
  ["新文華商業中心A座","科學館道", 160,0],
  ["新文華商業中心B座","科學館道", 130,0],
  ["永安廣場","麼地道", 200,0],
  ["南洋商業中心1座","麼地道", 90,0],
  ["南洋商業中心2座","麼地道", 110,0],
  ["好時中心","麼地道", 210,0],
  ["尖沙咀中心東翼","麼地道", 70,0],
  ["尖沙咀中心西翼","麼地道", 80,0],
  ["半島中心","麼地道", 280,0],
  ["康宏廣場南北座","加連威老道", 450,0],
  ["新東海商業中心","科學館道", 101,0],
  ["希爾頓中心","加連威老道", 101,0],
  ["安達中心","麼地道", 101,0]
];
var tstbArray = [
  ["麗斯中心","柯士甸道", 101,0],
  ["金門商業大廈","柯士甸道", 101,0],
  ["瑞信集團大廈","柯士甸道", 101,0],
  ["利雅商業大廈","山林道", 101,0],
  ["俊僑商業中心","山林道", 101,0],
  ["運通商業大廈","山林道", 101,0],
  ["山林中心","山林道", 101,0],
  ["柏豪商業大廈","山林道", 101,0],
  ["高荔商業中心","山林道", 101,0],
  ["恆貿中心","山林道", 101,0],
  ["耀基大廈","柯士甸道", 101,0],
  ["靄雲大廈","柯士甸道", 101,0],
  ["業廣商業大廈","柯士甸道", 101,0],
  ["The Wave","彌敦道", 101,0],
  ["寶華商業大廈","彌敦道", 101,0],
  ["協榮商業大廈","山林道", 101,0],
  ["卓能中心","山林道", 101,0],
  ["永勝商業中心","山林道", 101,0],
  ["達榮大廈","山林道", 101,0],
  ["錦興大廈","山林道", 101,0],
  ["山林道23號","山林道", 101,0]
];

var tstcArray = [
  ["崇基商業大廈","漆咸道南", 101,0],
  ["達成商業大廈","漆咸道南", 101,0],
  ["奇盛中心","金巴利道", 101,0],
  ["金時商業大廈","漆咸道南", 101,0],
  ["百利商業中心","漆咸道南", 101,0],
  ["中晶金融中心","漆咸道南", 101,0],
  ["中國五礦大廈","漆咸道南", 101,0],
  ["開麟中心","加連威老道", 101,0],
  ["恆港中心","金巴利道街", 101,0],
  ["太興廣場","金馬倫道", 101,0],
  ["信基商業中心","加連威老道", 101,0],
  ["德立大廈","加連威老道", 101,0],
  ["香檳大廈","金巴利道", 101,0],
  ["THE ONE","彌敦道", 101,0],
  ["金巴利道26號","金巴利道", 101,0],
  ["菲力大廈","金巴利道", 101,0],
  ["興明樓","加連威老道", 101,0],
  ["嘉威大廈","加連威老道", 101,0],
  ["美敦大廈","彌敦道", 101,0],
  ["愛賓商業大廈","加連威老道", 101,0],
  ["昆輝大廈","加連威老道", 101,0],
  ["加威中心","加連威老道", 101,0],
  ["加連威大廈","加連威老道", 101,0],
  ["加拿芬廣場","加拿分道", 101,0],
  ["波蒂妮斯大廈","金馬倫道", 101,0],
  ["祥順中心","厚福街", 101,0],
  ["藍馬商業大廈","厚福街", 101,0],
  ["宏生大廈","加拿分道", 101,0],
  ["華博商業大廈","厚福街", 101,0],
  ["匯理商業大廈","加拿分道", 101,0],
  ["恆隆銀行大廈","加連威老道", 101,0],
  ["幸福大廈","加連威老道", 101,0],
  ["利時商業大廈","嘉蘭圍", 101,0],
  ["The Cameron","金馬倫道", 101,0],
  ["安利商業大廈","金馬倫道", 101,0],
  ["天文台8號","天文台", 101,0],
  ["柯士甸商業中心","柯士甸路", 101,0],
  ["柯士甸2號","柯士甸道", 101,0],
  ["煥利商業大廈","柯士甸道", 101,0],
  ["富好中心","柯士甸路", 101,0],
  ["美麗華廣場","彌敦道", 101,0],
  ["諾士佛臺1號","諾士佛臺", 101,0],
  ["東港商業大廈","諾士佛臺", 101,0],
  ["冠福大廈","諾士佛臺", 101,0],
  ["諾士佛臺10號","諾士佛臺", 101,0],
  ["長利商業大廈","金巴利道", 101,0],
  ["永利大廈","金巴利道", 101,0],
  ["金巴利廣場","金巴利道", 101,0],
  ["諾士佛廣場","天文台圍", 101,0],
  ["金巴利中心","金巴利道", 101,0],
  ["新業廣大廈","金巴利道", 101,0]
];

var tstdArray = [
  ["嘉芬大廈","加拿分道", 101,0],
  ["集友大廈","加拿分道", 101,0],
  ["加拿芬道2號","加拿分道", 101,0],
  ["利嘉大廈","加拿分道", 101,0],
  ["發利大廈","加拿分道", 101,0],
  ["格蘭中心","堪富利士道", 101,0],
  ["堪富利廣場","堪富利士道", 101,0],
  ["堪富利士大廈","堪富利士道", 101,0],
  ["時財商業大廈","堪富利士道", 101,0],
  ["宏貿發展大廈","堪富利士道", 101,0],
  ["雲龍商業大廈","寶勒巷", 101,0],
  ["金帝行","寶勒巷", 101,0],
  ["盈豐商業大廈","寶勒巷", 101,0],
  ["寶勒巷10號","寶勒巷", 101,0],
  ["金鑾大廈","彌敦道", 101,0],
  ["昌興大廈","彌敦道", 101,0],
  ["金冠大廈","彌敦道", 101,0],
  ["其士大廈","漆咸道南", 101,0],
  ["溫莎大廈","漆咸道南", 101,0],
  ["中國保險大廈","金馬倫道", 101,0],
  ["金龍中心","金馬倫道", 101,0],
  ["金壘商業中心","金馬倫道", 101,0],
  ["東麗中心","金馬倫道", 101,0],
  ["萬勤商業大廈","金馬倫道", 101,0],
  ["金馬倫廣場","金馬倫道", 101,0],
  ["福僑大廈","金馬倫道", 101,0],
  ["金馬商業大廈","金馬倫道", 101,0],
  ["恆信商業大廈","金馬倫道", 101,0],
  ["宏威中心","金馬倫道", 101,0],
  ["利達行","金馬倫道", 101,0],
  ["華懋廣場","麼地道", 101,0]
];

var tsteArray = [
  ["北京道1號","北京道", 460,0],
  ["中港城1,2,3,5,6","廣東道", 100,0],
  ["九倉電訊中心","廣東道", 150,0],
  ["世界商業中心","廣東道", 90,0],
  ["環球金融中心南座","廣東道", 150,0],
  ["環球金融中心北座","廣東道", 300,0],
  ["新港中心","廣東道", 150,0],
  ["力寶太陽廣場","廣東道", 320,0],
  ["港威大廈1-2","廣東道", 220,0],
  ["海洋中心","廣東道", 530,0],
  ["英國保誠大廈","廣東道", 101,0],
  ["永明金融大廈","廣東道", 101,0],
  ["海威商業中心","廣東道", 101,0],
  ["彩星集團大廈","廣東道", 101,0],
  ["文利大廈","廣東道", 101,0],
  ["恆利大廈","廣東道", 101,0],
  ["帝國大廈","廣東道", 101,0],
  ["1881 Heritage","廣東道", 101,0],
  ["中港中心","廣東道", 101,0],
  ["海運大廈","廣東道", 101,0],
  ["星光行","梳士巴利道", 101,0]
];

var tstfArray = [
  ["天星大廈","亞士厘道", 200,0],
  ["九龍中心","亞士厘道", 200,0],
  ["環球商業大廈","北京道", 200,0],
  ["國都大廈","北京道", 150,0],
  ["海利行","海防道", 150,0],
  ["中達大廈","海防道", 150,0],
  ["亞太中心","漢口道", 300,0],
  ["騏生商業中心","漢口道", 200,0],
  ["麥仕維中心","漢口道", 150,0],
];

function changetable(array) {
  var result = "<table><tr><th>大廈名</th><th>地址</th><th>張數</th></tr>";
  for (var i = 0; i < array.length; i++) {
	  if (array[i][3] == 1) {
		  result += "<tr style='background-color:#FF9E00;' onclick='addbuilding(" + area + "," + i +")'>";
	 	 } else {
    	result += "<tr onclick='addbuilding(" + area + "," + i +")'>";
		}
    
      result += "<td>" + array[i][0] + "</td><td>" + array[i][1] + "</td><td>" + array[i][2] + "</td></tr>";
  }
  result += "<tr style='background-color:#4CAF50;'><th></th><th>本頁總數量</th><th>" + pagesumup(array) + "</table><br>";
  
  var result1 = "<table><tr><th>大廈名</th><th>地址</th><th>張數</th></tr>";
  for (var i = 0; i< tstaArray.length; i++) {
	  if (tstaArray[i][3] == 1) {
		  result1 += "<tr style='background-color:#FF9E00;' onclick='addbuilding(tstaArray," + i +")'><td>" + tstaArray[i][0] + "</td><td>" + tstaArray[i][1] + "</td><td>" + tstaArray[i][2] + "</td></tr>";
	  }
  }
   for (var i = 0; i< tstbArray.length; i++) {
	  if (tstbArray[i][3] == 1) {
		  result1 += "<tr style='background-color:#FF9E00;' onclick='addbuilding(tstbArray," + i +")'><td>" + tstbArray[i][0] + "</td><td>" + tstbArray[i][1] + "</td><td>" + tstbArray[i][2] + "</td></tr>";
	  }
  }
  for (var i = 0; i< tstcArray.length; i++) {
	  if (tstcArray[i][3] == 1) {
		  result1 += "<tr style='background-color:#FF9E00;' onclick='addbuilding(tstcArray," + i +")'><td>" + tstcArray[i][0] + "</td><td>" + tstcArray[i][1] + "</td><td>" + tstcArray[i][2] + "</td></tr>";
	  }
  }
  for (var i = 0; i< tstdArray.length; i++) {
	  if (tstdArray[i][3] == 1) {
		  result1 += "<tr style='background-color:#FF9E00;' onclick='addbuilding(tstdArray," + i +")'><td>" + tstdArray[i][0] + "</td><td>" + tstdArray[i][1] + "</td><td>" + tstdArray[i][2] + "</td></tr>";
	  }
  }
  for (var i = 0; i< tsteArray.length; i++) {
	  if (tsteArray[i][3] == 1) {
		  result1 += "<tr style='background-color:#FF9E00;' onclick='addbuilding(tsteArray," + i +")'><td>" + tsteArray[i][0] + "</td><td>" + tsteArray[i][1] + "</td><td>" + tsteArray[i][2] + "</td></tr>";
	  }
  }
  for (var i = 0; i< tstfArray.length; i++) {
	  if (tstfArray[i][3] == 1) {
		  result1 += "<tr style='background-color:#FF9E00;' onclick='addbuilding(tstfArray," + i +")'><td>" + tstfArray[i][0] + "</td><td>" + tstfArray[i][1] + "</td><td>" + tstfArray[i][2] + "</td></tr>";
	  }
  }
  
  result1 += "<tr style='background-color:#4CAF50;'><th></th><th>總數量</th><th>" + sumup() + "</table>";
  
  document.getElementById('tbl').innerHTML = result;
  document.getElementById('tbl1').innerHTML = result1;
}

function pagesumup(array) {
	var sum=0;
	for (var i = 0; i < array.length; i++) {
		if (array[i][3]==1) {
			sum += array[i][2];
		}
	}
	return sum;
}
			

function sumup() {
	var sum=0;
	for (var i = 0; i< tstaArray.length; i++) {
		if (tstaArray[i][3]==1) {
			sum += tstaArray[i][2];
		}
	}
	for (var i =0; i<tstbArray.length; i++) {
		if (tstbArray[i][3]==1) {
			sum += tstbArray[i][2];
		}
	}
	for (var i =0; i<tstcArray.length; i++) {
		if (tstcArray[i][3]==1) {
			sum += tstcArray[i][2];
		}
	}
	for (var i =0; i<tstdArray.length; i++) {
		if (tstdArray[i][3]==1) {
			sum += tstdArray[i][2];
		}
	}
	for (var i =0; i<tsteArray.length; i++) {
		if (tsteArray[i][3]==1) {
			sum += tsteArray[i][2];
		}
	}
	for (var i =0; i<tstfArray.length; i++) {
		if (tstfArray[i][3]==1) {
			sum += tstfArray[i][2];
		}
	}
	return sum;
}
	
function addbuilding(array,bi) {
	if (array[bi][3]==1) {
		array[bi][3]=0;	
	} else {
		array[bi][3]=1;
	}
	changetable(array);
}