$(function(){
    $(".actorcate").hide()
    $(".genrecate").hide()
    console.log("Asslam");
    $('.actor').click(()=>{
        $(".yearecate").hide()
        $(".genrecate").hide()
        $(".actorcate").toggle()
    })
    $('.generes').click(()=>{
        $(".yearecate").hide()
        $(".genrecate").toggle()
        $(".actorcate").hide()
    })
    $('.years').click(()=>{
        $(".yearecate").toggle()
        $(".genrecate").hide()
        $(".actorcate").hide()
    })
})