import{T as t,a as O}from"./oauth-p09K5Q4v.js";function E(r,n,i){i===void 0&&(i={});var e={type:"Feature"};return(i.id===0||i.id)&&(e.id=i.id),i.bbox&&(e.bbox=i.bbox),e.properties=n||{},e.geometry=r,e}function G(r,n,i){if(i===void 0&&(i={}),!r)throw new Error("coordinates is required");if(!Array.isArray(r))throw new Error("coordinates must be an Array");if(r.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!p(r[0])||!p(r[1]))throw new Error("coordinates must contain numbers");var e={type:"Point",coordinates:r};return E(e,n,i)}function p(r){return!isNaN(r)&&r!==null&&!Array.isArray(r)}function S(r,n,i){if(r!==null)for(var e,o,u,b,w,a,h,g=0,f=0,v,A=r.type,m=A==="FeatureCollection",L=A==="Feature",N=m?r.features.length:1,c=0;c<N;c++){h=m?r.features[c].geometry:L?r.geometry:r,v=h?h.type==="GeometryCollection":!1,w=v?h.geometries.length:1;for(var P=0;P<w;P++){var l=0,y=0;if(b=v?h.geometries[P]:h,b!==null){a=b.coordinates;var s=b.type;switch(g=i&&(s==="Polygon"||s==="MultiPolygon")?1:0,s){case null:break;case"Point":if(n(a,f,c,l,y)===!1)return!1;f++,l++;break;case"LineString":case"MultiPoint":for(e=0;e<a.length;e++){if(n(a[e],f,c,l,y)===!1)return!1;f++,s==="MultiPoint"&&l++}s==="LineString"&&l++;break;case"Polygon":case"MultiLineString":for(e=0;e<a.length;e++){for(o=0;o<a[e].length-g;o++){if(n(a[e][o],f,c,l,y)===!1)return!1;f++}s==="MultiLineString"&&l++,s==="Polygon"&&y++}s==="Polygon"&&l++;break;case"MultiPolygon":for(e=0;e<a.length;e++){for(y=0,o=0;o<a[e].length;o++){for(u=0;u<a[e][o].length-g;u++){if(n(a[e][o][u],f,c,l,y)===!1)return!1;f++}y++}l++}break;case"GeometryCollection":for(e=0;e<b.geometries.length;e++)if(S(b.geometries[e],n,i)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function k(r,n){n===void 0&&(n={});var i=0,e=0,o=0;return S(r,function(u){i+=u[0],e+=u[1],o++},!0),G([i/o,e/o],n.properties)}const B=[82,-17,155,12],C={latitude:-2.548926,longitude:118.0148634},M=t.Union([t.Tuple([t.Number(),t.Number(),t.Number(),t.Any()]),t.Tuple([t.Number(),t.Number()])]),d=t.Object({type:t.Literal("FeatureCollection"),features:t.Array(t.Object({type:t.Literal("Feature"),geometry:t.Union([t.Object({type:t.Literal("Polygon"),coordinates:t.Array(t.Array(M))}),t.Object({type:t.Literal("MultiPolygon"),coordinates:t.Array(t.Array(t.Array(M)))})])}))}),D=O.Compile(d);function q(r){return r==null||r.features.length===0||r.type==null?void 0:k(r).geometry.coordinates}function z(r){if(r!=null&&!(r.latitude==C.latitude&&r.longitude==C.longitude))return r}export{D as B,q as a,B as b,C as c,z as g};
