const url = `https://api.lolicon.app/setu/v2?r18=0"`;
$.http.get(url,function(error, response, data){
    let datas = JSON.parse(data) || {"code": 1,"msg": "无响应"}
    let msg = datas.data[0]
    let url = msg.urls.original
    console.log(url)
    $.msg("title", "subtitle", msg.tags, {'openUrl':url,'mediaUrl':url})
});