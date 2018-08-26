(function(window){var svgSprite='<svg><symbol id="icon-yonghuming" viewBox="0 0 1024 1024"><path d="M505.001097 574.420655c-132.338051 0-240.393046-113.557312-240.393046-252.604158 0-139.089825 108.054995-252.583692 240.393046-252.583692 132.380006 0 240.473887 113.493867 240.473887 252.583692C745.474984 458.029808 637.381104 574.420655 505.001097 574.420655L505.001097 574.420655 505.001097 574.420655zM505.001097 94.777597c-118.80585 0-213.368552 102.165868-213.368552 224.214575 0 124.884288 97.239672 224.215598 213.368552 224.215598 118.885668 0 213.450417-102.166891 213.450417-224.215598C718.451514 194.065927 623.886765 94.777597 505.001097 94.777597L505.001097 94.777597 505.001097 94.777597zM826.462506 954.766173c-8.093329 0-13.470803-5.713119-13.470803-14.20656 0-178.797176-137.794319-323.556117-307.990606-323.556117-170.155355 0-307.909765 144.758941-307.909765 323.556117 0 8.493441-5.418406 14.20656-13.534248 14.20656-8.114818 0-13.491269-5.713119-13.491269-14.20656 0-195.848527 151.287635-351.933421 334.934259-351.933421 186.4249 0 334.995657 158.920476 334.995657 351.933421C839.996754 949.053054 834.578348 954.766173 826.462506 954.766173L826.462506 954.766173 826.462506 954.766173z"  ></path></symbol><symbol id="icon-henggang" viewBox="0 0 1024 1024"><path d="M512 6.4C230.4 6.4 6.4 230.4 6.4 512s224 505.6 505.6 505.6 505.6-224 505.6-505.6S793.6 6.4 512 6.4z m249.6 537.6H262.4c-19.2 0-38.4-12.8-38.4-32s12.8-32 32-32h505.6c19.2 0 32 12.8 32 32 0 25.6-12.8 32-32 32z"  ></path></symbol><symbol id="icon-mima" viewBox="0 0 1024 1024"><path d="M704 435.008V256a192 192 0 1 0-384 0v178.08l64-51.776V256a128 128 0 1 1 256 0v138.752l64 40.256z" fill="#99A9BF" ></path><path d="M512 960c-176.736 0-320-143.264-320-320s143.264-320 320-320 320 143.264 320 320-143.264 320-320 320z m0-64a256 256 0 1 0 0-512 256 256 0 0 0 0 512z" fill="#99A9BF" ></path><path d="M480 544l64 0 0 192-64 0 0-192Z" fill="#99A9BF" ></path></symbol><symbol id="icon-chenggong" viewBox="0 0 1024 1024"><path d="M512 0.006C229.233 0.006 0.006 229.233 0.006 512S229.233 1023.994 512 1023.994 1023.994 794.767 1023.994 512 794.767 0.006 512 0.006z m269.355 390.731L468.122 703.974c-9.763 9.763-22.56 14.645-35.355 14.645-12.796 0-25.592-4.882-35.355-14.645l-0.028-0.029-154.739-154.737c-19.526-19.526-19.527-51.185 0-70.71 19.526-19.526 51.184-19.527 70.711 0l119.411 119.41 277.878-277.88c19.525-19.526 51.184-19.527 70.711 0 19.526 19.525 19.526 51.183-0.001 70.709z" fill="#01cf97" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)