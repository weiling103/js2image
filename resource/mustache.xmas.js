                                                                                                    
                                                                                                    
                                                         (                                          
                                                        function                                         
                                                        (e,t                                         
                                                       ){if(                                        
                                                      typeof                                        
                                                    exports ===                                       
                                                     ("objec"+"t"                                      
                                                  )  && exports)                                     
                                                {t(exports)}else                                     
                                              {var n={};t(n);if(                                    
                                            typeof define ===  (                                   
                                          "funct"+"ion")  && define                                  
                                        .amd){define(n)}else{e.                                 
                                      Mustache=n}}})(this,function(e)                                
                                   {var t= /\s*/ ;var n= /\s+/ ;var r=                               
                                 /\S/ ;var i= /\s*=/ ;var o= /\s*\}/ ;var                             
                                 s=     /#|\^|\/|>|\{|&|=|!/ ;var                             
                                     a=RegExp   .prototype.test;function u(e,t){                           
                                          return a.call (e,t)}function l(e){                         
                                         return!u (r,e)}var f=Object                                 
                                       .prototype.toString;var c=Array                                
                                     .isArray || function(e){                                
                                   return f.call (e) ===  ("[obje"+                              
                                "ct Ar"+"ray]") };function d(e){                              
                              return typeof  e ===  ("funct"+"ion") }                           
                           function h(e){ return e.replace (                          
                         /[\-\[\]{}()*+?.,\\\^$|#\s]/g  , ("\\$&") )}var p={ "&" : ("&amp;") , "<" :                         
                       ("&lt;"  ) , ">" : ("&gt;") , '"' : ("&quot"+";") , "'" : (                     
                             "&#39;"  ) , "/" : ("&#x2F"+";") };function m(e){                      
                              return String    (  e).replace( /[&<>"'\/]/g ,function       (e){                      
                                    return p [e]})}function g(e){if(                                 
                                 !c(e) || e.length !== 2){                                  
                               throw new Error ( ("Inval"+"id ta"+                                
                             "gs: ") +e)} return[new  RegExp(h(e[0])+ (                              
                          "\\s*") ),new RegExp( ("\\s*") +h(e[1]))]}                             
                       function y(r,a){a=a || e.tags;r=r ||  ("") ;if(typeof                           
                     a ===  ("strin"+"g") ){a=a.split(n)}var u=g(a);var f=new                         
                  x(r);var c=[];var d=[];var p=[];var m=false;var y=false;                       
              function   w(){if (m && !y){while(p.length){delete d[p.pop()]}}else{p=[]}                     
                   m=false  ;y=false   }var T,_,k,C,D,S;while(!f.eos()){T=f.pos;k=f.                  
                    scanUntil      (u     [0])  ;if(k){for(var N=0,E=k.  length  ;N<E;                         
                                        ++  N) {C=k  .charAt( N);if(l                                      
                                                (C)){p.    push                                        
                                                (d.length                                             
                                               )}else{                                             
                                               y=true}d.                                            
                                                  push([ (                                           
                                                                                                    

                                                                                                    
                                                                                                    
                                                         "text"                                          
                                                        ) ,C                                         
                                                        ,T,T                                         
                                                       +1]);T                                        
                                                       += 1;if                                       
                                                    (C ===  (                                       
                                                   "\n") ){w()}                                      
                                                  }}if(!f.scan(u                                     
                                                [0]))break;m=true                                     
                                              ;_=f.scan(s) ||  (                                    
                                            "name") ;f.scan(t);if(                                   
                                          _ ===  ("=") ){k=f.                                  
                                        scanUntil(i);f.scan(i);f.                                 
                                      scanUntil(u[1])}else if(_ ===                                  
                                   ("{") ){k=f.scanUntil(new RegExp( (                               
                                "\\s*") +h( ("}") +a[1])));f.scan(o);f.                             
                                scanUntil   (u[1]) ;_= ("&") }else{k=f.scanUntil(u                            
                                     [1   ])}if(!f.scan(u[1])){                           
                                          throw new Error ( ("Unclo"+"sed t"+                        
                                         "ag at"+" ") +f.pos)}D=[_,k                                 
                                       ,T,f.pos];d.push(D);if(_ ===                                  
                                     ("#")  || _ ===  ("^") ){c.push(D                               
                                   )}else if(_ ===  ("/") ){S=c.pop();if                              
                                (!S){ throw new Error ( ('Unope'+'ned s'                             
                              +'ectio'+'n "') +k+ ('" at ') +T)}if(S[1] !==                           
                            k){ throw new Error ( ('Unclo'+'sed s'+'ectio'+                         
                         'n "')  +S[1]+ ('" at ') +T)}}else if(_ ===  ("name")                        
                         || _   ===  ("{")  || _ ===  ("&") ){y=true}else if(_ ===                     
                               ("="  ) ){u=g(a=k.split(n))}}S=c.pop();if(S){                      
                              throw new Error    (   ('Unclo'+'sed s'+'ectio'+'n "')        +S[                      
                                   1]+ ('" at ') +f.pos)} return b (                                 
                                 v(d))}function v(e){var t=[];var n,                                 
                               r;for(var i=0,o=e.length;i<o; ++ i){n=e                                
                             [i];if(n){if(n[0] ===  ("text")  && r && r                              
                          [0] ===  ("text") ){r[1] += n[1];r[3]=n[3]}else                             
                       {t.push(n);r=n}}} return t }function b(e){var t=[];                           
                    var n=t;var r=[];var i,o;for(var s=0,a=e.length;s<a; ++                          
                 s){i=e[s];switch(i[0]){case "#" :case "^" :n.push(i);r.push(i                       
              );n=i  [4]=[] ;break;case "/" :o=r.pop();o[5]=i[2];n=r.length>0?r[r.                     
                   length  -1][4]:   t;break;default:n.push(i)}} return t }function x(                  
                    e){      this     .  string=e;this.tail=e;this  .pos=0  }x.                         
                                       prototype . eos=function  (){  return this.tail                                      
                                                  ===  (    ""                                        
                                                ) };x.                                             
                                               prototype                                             
                                               .                                            
                                                  scan=function                                           
                                                                                                    

                                                                                                    
                                                                                                    
                                                         (e                                          
                                                        ){var                                         
                                                                                                  
                                                       t=this                                        
                                                      .tail.                                       
                                                    match(e);if                                       
                                                   (t && t.index                                      
                                                   === 0){var n=t                                     
                                                [0];this.tail=this                                     
                                              .tail.substring(n.                                    
                                            length);this.pos += n.                                   
                                          length; return n } return""                                  
                                         };x.prototype.                                 
                                      scanUntil=function(e){var t=this                                
                                   .tail.search(e),n;switch(t){case-1:                               
                                n=this.tail;this.tail= ("") ;break;case                              
                                0:   n= ("" ) ;break;default:n=this.tail.                            
                                     substring   (0,t);this.tail=this.tail.substring                          
                                          (t)}this.pos += n.length; return n                         
                                         };function w(e,t){this.view=e                                 
                                        == null?{}:e;this.cache={ "."                                
                                      :this.view};this.parent=t}w.                               
                                   prototype.push=function(e){ return new                              
                                  w(e,this)};w.prototype.lookup=function                             
                              (e){var t;if(e in this.cache){t=this.cache[e                           
                           ]}else{var n=this;while(n){if(e.indexOf( (".") )>                         
                         0){t=n .view;var r=e.split( (".") ),i=0;while(t!=null                        
                        && i<  r.length){t=t[r[ i++ ]]}}else{t=n.view[e]}if(t!=null                     
                             )break  ;n=n.parent}this.cache[e]=t}if(d(t)){t=t.call(                     
                              this   .  view)} return t };function T(){       this                      
                                   .cache={}}T.prototype.                                 
                                 clearCache=function(){this.cache={}                                 
                               };T.prototype.parse=function(e,t){var                                 
                             n=this.cache;var r=n[e];if(r == null){r=n[                              
                          e]=y(e,t)} return r };T.prototype.                             
                       render=function(e,t,n){var r=this.parse(e);var i=t                            
                    instanceof w?t:new w(t); return this.renderTokens (r,i,n                         
                 ,e)};T.prototype.renderTokens=function(t,n,r,i){var o= ("") ;                       
              var   s=this ;function a(e){ return s.render (e,n,r)}var u,l;for(var                     
                    f=0,  h=t.   length;f<h; ++ f){u=t[f];switch(u[0]){case "#" :l=n                  
                    .      lookup     (u[1  ]);if(!l)continue;if(c(l)  ){for  (var                          
                                       p=0 ,m=l .  length;p <m; ++                                       
                                                p){o +=     this                                        
                                                .                                             
                                               renderTokens                                             
                                               (u[4],n.push                                            
                                                  (l[p]),r                                           
                                                                                                    

                                                                                                    
                                                                                                    
                                                         ,i                                          
                                                        )}}                                         
                                                        else                                         
                                                        if(                                        
                                                      typeof l                                       
                                                     ===  (                                       
                                                   "objec"+"t")                                      
                                                    || typeof l                                      
                                                ===  ("strin"+"g"                                     
                                              ) ){o += this.                                    
                                            renderTokens(u[4],n.push                                   
                                          (l),r,i)}else if(d(l)){if                                  
                                        (typeof i !==  ("strin"+"g")                                 
                                       ){ throw new Error ( ("Canno"+                                
                                   "t use"+" high"+"er-or"+"der s"+                               
                                "ectio"+"ns wi"+"thout"+" the "+"origi"+                             
                                "nal t"   +"empla" +"te") )}l=l.call(n.view,i.slice                            
                                     (u   [3],u[5]),a);if(l!=null)o += l}else                          
                                          {o += this.renderTokens(u[4],n,r,i)                        
                                         }break;case "^" :l=n.lookup                                 
                                       (u[1]);if(!l || c(l) && l.length                                
                                      === 0){o += this.renderTokens(u[                               
                                   4],n,r,i)}break;case ">" :if(!r)                              
                                continue;l=this.parse(d(r)?r(u[1]):r[u[1                             
                              ]]);if(l!=null)o += this.renderTokens(l,n,r,                           
                           i);break;case "&" :l=n.lookup(u[1]);if(l!=null)o                          
                         += l; break;case "name" :l=n.lookup(u[1]);if(l!=null                        
                       )o +=   e.escape(l);break;case "text" :o += u[1];break}}                      
                             return o   };e.name= ("musta"+"che.j"+"s") ;e.version= (                     
                              "0.8.0"   )   ;e.tags=[ ("{{") , ("}}") ];var        _=new                      
                                    T;e.clearCache=function(){                                  
                                 return _.clearCache ()};e.                                 
                               parse=function(e,t){ return _.parse (e                                
                             ,t)};e.render=function(e,t,n){                               
                          return _.render (e,t,n)};e.to_html=function(t,                             
                       n,r,i){var o=e.render(t,n,r);if(d(i)){i(o)}else{                            
                    return o }};e.escape=m;e.Scanner=x;e.Context=w;e.Writer=T                         
                 })                       
                                      
                                          
                                                              
                                                                                  
                                                                                            
                                                                                             
                                                                                            
                                                                                           
                                                                                             
                                                                                                    

