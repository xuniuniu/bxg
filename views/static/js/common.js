
    define(["jquery","template","cookie"],function($,template){
         $(function(){
             if(location.pathname!="/dashboard/login"){
                 if(!$.cookie("PHPSESSID")){
                     location.href="/dashboard/login";
                 }
             
             var userinfo=JSON.parse($.cookie("userinfo"));
             console.log(userinfo);
             var html=template("profile_tpl",userinfo);
             $("#profile").html(html);
            
            }

            $("#logout_btn").click(function(){
                $.ajax({
                    url:"/api/logout",
                    type:"post",
                    success:function(data){
                        console.log(data);
                        if(data.code==200){
                            location.href="/dashboard/login";
                        }
                    }

                })
            })

         })
    })

