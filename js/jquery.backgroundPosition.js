/**
 * @author Alexander Farkas
 * v. 1.02
 */
(function($) {
	$.extend($.fx.step,{
	    backgroundPosition: function(fx) {
        if (fx.elem.id=="foreground")
        console.log(fx.elem.id,fx.end[0],fx.end[1],fx.elem.id=="foreground");


        if (fx.elem.id=="foreground"  && fx.end[0] === -10000 && fx.end[1]===-2000) {
          $('#foreground').animate({
        backgroundPosition:"(-10000px -2000px)"
      }, 120000, 'linear');
      }


      if (fx.elem.id=="midground" && typeof fx.end == 'object') {
        $('#midground').animate({
        backgroundPosition:"(-10000px -2000px)"
      }, 240000, 'linear');
      }

      if (fx.elem.id=="background" && typeof fx.end == 'object') {
        $('#background').animate({
        backgroundPosition:"(-10000px -2000px)"
      }, 480000, 'linear');
      }

            if (typeof fx.end == 'string') {
     //         console.log(fx);
                var start = $.css(fx.elem,'backgroundPosition');
                start = toArray(start);
                fx.start = [0,0];
                var end = toArray(fx.end);
                fx.end = [end[0],end[2]];
                fx.unit = [end[1],end[3]];
			}
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];
            
           function toArray(strg){
               strg = strg.replace(/left|top/g,'0px');
               strg = strg.replace(/right|bottom/g,'100%');
               strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
               var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
               return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
           }
        }
	});
})(jQuery);