var r;(t=>{t.property=(e,o)=>o?{property:e,content:o}:null,t.name=(e,o)=>o?{name:e,content:o}:null,t.link=(e,o)=>({tagName:"link",rel:e,...typeof o=="string"?{href:o}:o}),t.title=e=>({title:e}),t.richData=e=>({"script:ld+json":e}),(e=>{e.webSite=t.richData,e.breadcrumb=t.richData,e.listItem=t.richData,e.governmentOrganization=t.richData,e.webPage=t.richData,e.product=t.richData,e.article=t.richData})(t.RichData||(t.RichData={}))})(r||(r={}));var n;(t=>{t.multiple=a=>(p,l)=>Array.isArray(l)?l.map(i=>a(p,i)):[a(p,l)];const e=(0,t.multiple)(r.name),o=(0,t.multiple)(r.property),u=(0,t.multiple)(r.link);t.robots=(a,p)=>({name:a,content:p.join(", ")}),t.themeColor=(a="theme-color",p)=>({name:a,content:p.color,media:p.media}),t.ogMedia=(0,t.multiple)((a,p)=>{var i,y;const l=m=>a+":"+m;return[r.property(a,p.url),r.property(l("type"),p.type),r.property(l("width"),(i=p.width)==null?void 0:i.toString()),r.property(l("height"),(y=p.height)==null?void 0:y.toString()),r.property(l("alt"),p.alt)]}),t.rendererMap={title:(a,p)=>r.title(p),"application-name":r.name,author:e,generator:r.name,description:r.name,referrer:r.name,"color-scheme":r.name,creator:e,publisher:e,canonical:r.name,alternates:u,robots:t.robots,googlebot:t.robots,"theme-color":t.themeColor,icon:u,"og:title":r.property,"og:url":r.property,"og:description":r.property,"og:determiner":r.property,"og:locale":r.property,"og:locale:alternate":o,"og:site_name":r.property,"og:type":r.property,"og:image":t.ogMedia,"og:audio":t.ogMedia,"og:video":t.ogMedia,"article:published_time":r.property,"article:modified_time":r.property,"article:expiration_time":r.property,"article:author":(0,t.multiple)(r.property),"article:section":r.property,"article:tag":(0,t.multiple)(r.property),"profile:first_name":r.property,"profile:last_name":r.property,"profile:username":r.property,"profile:gender":r.property,"product:plural_title":r.property,"product:price.amount":r.property,"product:price.currency":r.property};function c(a,p){if(p==null)return[];const l=t.rendererMap[a](a,p);return Array.isArray(l)?l:[l]}t.render=c})(n||(n={}));function g(t){return Object.entries(t).flatMap(([e,o])=>e in n.rendererMap?n.rendererMap[e](e,o):[])}export{r as A,g as m};
