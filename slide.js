$.fn.extend({
        slide:function(obj){
            //1,是否添加按钮
            //2,效果
            //3,是否自动播放

          //获取实参 设置
          if( obj.btn === undefined){
            obj.btn=true;
          }
            obj.effect=obj.effect||false;
            obj.play=obj.play||true; 
            obj.Playtime=obj.Playtime||3000; 
            obj.color = obj.color||"red"; 
            obj.autoplay = obj.autoplay||false;
        //图片的初始化
             var listImg = this.find('img');
             var count = listImg.length-1;
             listImg.hide();
             listImg.eq(0).show();
             this.css({textAlign:"center"});
             var widthBoult = (this.width()-this.find("img").width())/2;
        //箭头的插入
            var left =$("<img src='img/l.png'>")
            var right =$("<img src='img/r.png'>")
            if(obj.btn){
                 left.appendTo(this);
                 right.appendTo(this);
                 this.css({position:"relative"})
                 left.css({
                     position:"absolute",
                     top:"45%",
                     left:widthBoult+20,
                     opactiy:0.7,
                     transition:"all .5s",
                     transform:"scale(1)"
                 })
                 right.css({
                    position:"absolute",
                    top:"45%",
                    right:widthBoult+20,
                    opactiy:0.7,
                    transition:"all .5s",
                    transform:"scale(1)"
                })
                right.hover(function(){
                    right.css({
                        cursor: "pointer",
                        opactiy:1,
                        transform:"scale(1.1)"
                    })
                })
                left.hover(function(){
                    left.css({
                        cursor: "pointer",
                        opactiy:1,
                        transform:"scale(1.1)"
                    })
                })
                right.mouseout(function(){
                    right.css({
                        opactiy:0.7,
                        transform:"scale(1)"
                    })
                })
                left.mouseout(function(){
                    left.css({
                        opactiy:0.7,
                        transform:"scale(1)"
                    })
                })
            }
             //右边箭头的点击事件
            right.click(function(){
                ul.find("li").css({
                    backgroundColor:"white"
                })
                automatic()
            })
           
            
            //左边箭头的点击事件
            left.click(function(){
                ul.find("li").css({
                    backgroundColor:"white"
                })
                if(n>0){
                    $('img').eq(n--).fadeOut(function(){
                        $("img").eq(n).fadeIn();
                    })
                    ul.find("li").eq(n).css({
                        backgroundColor:obj.color
                    })
                }else{
                    $("img").eq(n).fadeOut(function(){
                        $("img").eq(count).fadeIn();
                        n=count;
                    });
                    ul.find("li").eq(count).css({
                        backgroundColor:obj.color
                    })
                }
            })
            // 自动播放
            if(obj.autoplay){
                var a = setInterval(function(){
                    automatic()
                },obj.Playtime)
    
                this.find("img").mouseover(function(){
                    clearInterval(a);
                })
                this.find("img").mouseout(function(){
                    a =setInterval(function(){
                        automatic()
                    },obj.Playtime)
                })
            }
           
            //创建小圆点
            var ul =$("<ul></ul>")
           
            for(var i= 0;i<listImg.length;i++){
                var li = $("<li></li>");
                li.css({
                    width:"10px",
                    height:"10px",
                    backgroundColor:'#FFF',
                    borderRadius:"50%",
                    float:"left",
                    listStyle:"none",
                    marginRight:"10px",
                    
                })
                ul.css({
                    position:"absolute",
                    bottom:"30px",
                    left:ulWidth
                })
                li.appendTo(ul);
                var ulWidth = (this.width()-ul.width())/2
                this.css({
                    position:"relative"
                })
                ul.appendTo(this);
                
            }
            //右边箭头的点击事件
            var n = 0;
           
            function automatic(){
                    ul.find("li").css({
                        backgroundColor:"white"
                    })
                    if(n<count){
                        $('img').eq(n++).fadeOut(function(){
                            $("img").eq(n).fadeIn();
                        })
                        ul.find("li").eq(n).css({
                            backgroundColor:obj.color
                        })
                    }else{
                        $("img").eq(n).fadeOut(function(){
                            $("img").eq(0).fadeIn();
                            n=0;
                        });
                        ul.find("li").eq(0).css({
                            backgroundColor:obj.color
                        })
                    }
                    ul.find("li").click(function(){
                        console.log($("li").index())
                    })
                    
            }
            ul.find("li").eq(0).css({
                backgroundColor:obj.color
            })
        }
