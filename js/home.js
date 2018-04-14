var num=1;
var time="";
function input_focus(){
    document.getElementById("myinput").style.borderColor="#2577e3";
     document.getElementById("mybutton").style.backgroundColor="#2577e3";
     document.getElementById("mybutton").style.backgroundPosition="-52px -627px";
}
function input_onblur(){
    document.getElementById("myinput").style.borderColor="#a4cbff";
     document.getElementById("mybutton").style.backgroundColor="#a4cbff";
     document.getElementById("mybutton").style.backgroundPosition="-52px -603px";
}
function mouseout_global(){
    document.getElementById("language-wrap").style.display="none";
}
function mouseover_global(){
    document.getElementById("language-wrap").style.display="block";
}
function mouseover_nav_hotel(){
    x=document.getElementById('cui_subnav_hotel');
    x.style.display="block";     
}
function mouseout_nav_hotel(){
    x=document.getElementById('cui_subnav_hotel');
    x.style.display="none";     
}
function mouseover_nav_travel(){
    x=document.getElementById('cui_subnav_travel');
    x.style.display="block";     
}
function mouseout_nav_travel(){
    x=document.getElementById('cui_subnav_travel');
    x.style.display="none";     
}

function mouseover_search_tab(obj){
    obj.className="s_tab_current";
}
function mouseout_search_tab(obj){
    if (obj.dataset.index!=0) {obj.className="s_tab_nocurrent";}
}//search 左边鼠标悬停
    	
function onclick_search_left(obj){
    var cui_search = document.getElementById("searchBoxUl").childNodes;
        for(var i=0;i<cui_search.length;i++){
            cui_search[i].className="s_tab_nocurrent";
            cui_search[i].dataset.index =1;
        }
        obj.className="s_tab_current";
        obj.dataset.index = 0;
    }

function load(){
    var nowDate=new Date();
    var year=nowDate.getFullYear();
    var month=nowDate.getMonth()+1;
    var day=nowDate.getDate();
    var now=year+"-"+month+"-"+day;
    document.getElementById('checkin_date').value=now;
    document.getElementById('checkout_date').value=now;	
    slide_auto(num);
}//secarchbox 当前日期显示

function searchBox_select(obj){
    var cui_search = document.getElementById("hotelSwitch").childNodes;
    for(var i=0;i<cui_search.length;i++){
                
        cui_search[i].dataset.index=1;
        cui_search[i].className="";
    }
    obj.className="current";
    obj.dataset.index=0;
    switch(obj.id){
        case "chinaHotel":
        document.getElementById("interHotelForm").style.display="none";
        document.getElementById("chinaHotelForm").style.display="block";
        break;
        case "interHotel":
        document.getElementById("chinaHotelForm").style.display="none";
        document.getElementById("interHotelForm").style.display="block";
        break;
    }
            
        }//secarchbox 点击事件

function mouseover_search(obj){
    obj.className="current";
    }
function mouseout_search(obj){ 
    if (obj.dataset.index!=0){
        obj.className="";
        }
    }

function click_inner_tabs_nav(obj){
    var cui_search = document.getElementById("inner-tabs-nav").childNodes;
        for(var i=0;i<cui_search.length;i++){
                cui_search[i].className="";
                cui_search[i].dataset.index=1;
            }
        obj.className="active";
        obj.dataset.index=0;
        }
function mouseover_inner_tabs_nav(obj){
    obj.className="active";
}

function mouseout_inner_tabs_nav(obj){ 
    if (obj.dataset.index!=0){
    obj.className="";

    }
}

function _scroll(x){
    console.log($(x).offset().top);
  $(document.body).animate({

    scrollTop:($(x).offset().top - 220)
  }, 500 );
}

function ad_click(){
  $("#ad-click").animate({left:'-200px'},"slow",function(){$("#ad-out").animate({left:'0px'},500);});
  
}

function ad_close(){
   $("#ad-out").animate({left:'-2000px'},500,function(){ $("#ad-click").animate({left:'0px'},"slow");});
  
}

/*--轮播大图-自动*/

function slide_auto(num){
    $(".dot-group li").removeClass("dot_current").eq(num).addClass("dot_current");/*先去除所有元素的current属性，再给某个元素增加current属性，避免同时出现多个current*/
    $(".slide-banner li").css("left", "1920px").eq(num-1).css("left", "0px").animate({left:'-1920px'},"fast");
    $(".slide-banner li").eq(num).animate({left:'0px'},"fast");
    /*eq() 方法返回被选元素中带有指定索引号的元素。*/
    var index = num > 4 ? 0 : num + 1;
    time = setTimeout("slide_auto(" + index + ")", 2000);/*定时器，每隔2s调用自身函数*/
}

function slide_click(obj){
    var click_num= obj.value;
    clearTimeout(time);//停止自动计时（stop setTimeout 函数）
    slide_auto(click_num);//调用自动播放函数
}
/* 轮播大图无点击效果－auto
function slide_autotest(num){
    $(".dot-group li").removeClass("dot_current").eq(num).addClass("dot_current");//先去除所有元素的current属性，再给某个元素增加current属性，避免同时出现多个current
    $(".slide-banner li").css("display", "none").eq(num).css("display", "block");//*eq() 方法返回被选元素中带有指定索引号的元素。
    var index = num > 4 ? 0 : num + 1;
    time = setTimeout("slide_auto(" + index + ")", 2000);//定时器，每隔2s调用自身函数
}


//轮播大图-点击

轮播大图无滑动效果－点击
function slide_clicktest(obj){
    var click_num= obj.value;
    $(".dot-group li").removeClass("dot_current").eq(click_num).addClass("dot_current");
    $(".slide-banner li").css("display", "none").eq(click_num).css("display", "block");
    clearTimeout(time);//停止自动计时（stop setTimeout 函数）
    //index = click_num > 4 ? 0 : click_num+ 1;
    slide_auto(click_num);//调用自动播放函数
   // time = setTimeout("slide_auto(" + index + ")", 2000);
}
*/

//电梯顶部掉落
window.addEventListener('scroll', () => {
  if (document.querySelector('body').scrollTop < 100) {
    document.querySelector('.lift').style.top = '520px';
  } else document.querySelector('.lift').style.top = '200px';
});
