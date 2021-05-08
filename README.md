<!DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
 <title>tteess</title>
</head>
<body>
<script>
     function btnClick(){
        const name= document.getElementById("name").value;
         console.log(name);
         if(name.indexOf('鑫')>-1){
            alert('郭佳锂好菜！')
         }else{
            alert(name+'好菜！')
         }
     }
</script>
<input type="text" name="" id="name" placeholder="请输入你的输入名字">
<button onclick='btnClick()'>确认</button>
</body>
</html>
