import{R as o,r as N}from"./jsx-runtime-ByGpHSPZ.js";import{B as T,f as we,u as ke,a as _e,c as Ee,m as Ce,k as Me}from"./factory-CAXpoK4s.js";import{u as Y}from"./DirectionProvider-CZrhDgZ9.js";import{c as De}from"./create-safe-context-jSuPt_P6.js";import{u as J}from"./use-id-CBFaeZXz.js";import{u as Pe}from"./use-uncontrolled-DgPl9ViR.js";import{u as Ve}from"./use-merged-ref-BJm5sttg.js";import{c as ze}from"./clamp-DTmYCdls.js";import{c as Ae}from"./createReactComponent-DG7S5Nwq.js";import{g as q}from"./gql-f3x5Sumy.js";const[Be,Z]=De("Rating was not found in tree");function H(t){const{width:a,height:n,style:m,...s}=t;return o.createElement("svg",{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:a,height:n,...m},...s},o.createElement("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"}))}H.displayName="@mantine/core/StarIcon";function x({type:t}){const a=Z();return o.createElement(H,{...a.getStyles("starSymbol"),"data-filled":t==="full"||void 0})}x.displayName="@mantine/core/StarSymbol";function ee({getSymbolLabel:t,emptyIcon:a,fullIcon:n,full:m,active:s,value:c,readOnly:y,fractionValue:d,color:U,id:b,onBlur:k,onChange:w,onInputChange:_,style:G,...E}){var i;const f=Z(),h=typeof n=="function"?n(c):n,l=typeof a=="function"?a(c):a,{dir:v}=Y();return o.createElement(o.Fragment,null,!y&&o.createElement("input",{...f.getStyles("input"),onKeyDown:$=>$.key===" "&&w(c),id:b,type:"radio","data-active":s||void 0,"aria-label":t==null?void 0:t(c),value:c,onBlur:k,onChange:_,...E}),o.createElement(T,{component:y?"div":"label",...f.getStyles("label"),"data-read-only":y||void 0,htmlFor:b,onClick:()=>w(c),__vars:{"--rating-item-z-index":(i=d===1?void 0:s?2:0)==null?void 0:i.toString()}},o.createElement(T,{...f.getStyles("symbolBody"),__vars:{"--rating-symbol-clip-path":d===1?void 0:v==="ltr"?`inset(0 ${s?100-d*100:100}% 0 0)`:`inset(0 0 0 ${s?100-d*100:100}% )`}},m?h||o.createElement(x,{type:"full"}):l||o.createElement(x,{type:"empty"}))))}ee.displayName="@mantine/core/RatingItem";var Fe={root:"m-f8d312f2",symbolGroup:"m-61734bb7",starSymbol:"m-5662a89a",input:"m-211007ba",label:"m-21342ee4",symbolBody:"m-fae05d6a"};const te=Fe;function Q(t,a){var s;const n=Math.round(t/a)*a,m=((s=`${a}`.split(".")[1])==null?void 0:s.length)||0;return Number(n.toFixed(m))}const Ne={size:"sm",getSymbolLabel:t=>`${t}`,count:5,fractions:1,color:"yellow"},Qe=Ee((t,{size:a,color:n})=>({root:{"--rating-size":Ce(a,"rating-size"),"--rating-color":Me(n,t)}})),ae=we((t,a)=>{const n=ke("Rating",Ne,t),{classNames:m,className:s,style:c,styles:y,unstyled:d,vars:U,name:b,id:k,value:w,defaultValue:_,onChange:G,fractions:E,count:f,onMouseEnter:h,readOnly:l,onMouseMove:v,onHover:i,onMouseLeave:$,onTouchStart:C,onTouchEnd:M,size:oe,variant:re,getSymbolLabel:ne,color:Te,emptySymbol:se,fullSymbol:le,highlightSelectedOnly:ie,...ce}=n,D=_e({name:"Rating",classes:te,props:n,className:s,style:c,classNames:m,styles:y,unstyled:d,vars:U,varsResolver:Qe}),{dir:ue}=Y(),me=J(b),L=J(k),W=N.useRef(null),[de,P]=Pe({value:w,defaultValue:_,finalValue:0,onChange:G}),[I,R]=N.useState(-1),[pe,O]=N.useState(!0),V=Math.floor(E),z=Math.floor(f),p=1/V,X=Q(de,p),A=I!==-1?I:X,j=e=>{const{left:r,right:u,width:B}=W.current.getBoundingClientRect(),F=B/z,S=(ue==="rtl"?u-e:e-r)/F;return ze(Q(S+p/2,p),p,z)},ge=e=>{h==null||h(e),!l&&O(!1)},ye=e=>{if(v==null||v(e),l)return;const r=j(e.clientX);R(r),r!==I&&(i==null||i(r))},fe=e=>{$==null||$(e),!l&&(R(-1),O(!0),I!==-1&&(i==null||i(-1)))},he=e=>{e.preventDefault();const{touches:r}=e;if(r.length!==1)return;const u=r[0];P(j(u.clientX)),C==null||C(e)},ve=e=>{e.preventDefault(),M==null||M(e)},$e=()=>pe&&R(-1),Ie=e=>{l||R(typeof e=="number"?e:parseFloat(e.target.value))},Re=e=>{l||P(typeof e=="number"?e:parseFloat(e.target.value))},Se=Array(z).fill(0).map((e,r)=>{const u=r+1,B=Array.from(new Array(r===0?V+1:V)),F=!l&&Math.ceil(I)===u;return o.createElement("div",{key:u,"data-active":F||void 0,...D("symbolGroup")},B.map((be,S)=>{const K=p*(r===0?S:S+1),g=Q(u-1+K,p);return o.createElement(ee,{key:`${u}-${g}`,getSymbolLabel:ne,emptyIcon:se,fullIcon:le,full:ie?g===A:g<=A,active:g===A,checked:g===X,readOnly:l,fractionValue:K,value:g,name:me,onChange:Re,onBlur:$e,onInputChange:Ie,id:`${L}-${r}-${S}`})}))});return o.createElement(Be,{value:{getStyles:D}},o.createElement(T,{ref:Ve(W,a),...D("root"),onMouseMove:ye,onMouseEnter:ge,onMouseLeave:fe,onTouchStart:he,onTouchEnd:ve,variant:re,size:oe,id:L,...ce},Se))});ae.classes=te;ae.displayName="@mantine/core/Rating";var Je=Ae("tags","IconTags",[["path",{d:"M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z",key:"svg-0"}],["path",{d:"M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592",key:"svg-1"}],["path",{d:"M7 10h-.01",key:"svg-2"}]]);const Ye=q(`
  query products($limit: Int, $desa: String) {
    products: marketplace(limit: $limit, desa: $desa) {
      marketplaces {
        name    ID        slug    description
        rating  reviews   likes   views
        user            { name phone }
        defaultVariant  { name price }
        defaultPhoto    { URL }
        category    { name slug }
        subcategory

        createdAt
        updatedAt
      }
    }
  }
`),Ze=q(`
  query productCardsWithPagination(
    $limit: Int
    $currentPage: Int
    $sort: Sort
    $desa: String
    $categoryID: Int
    $searchQuery: String
  ) {
    products: marketplace(
        limit: $limit, 
        currentPage: $currentPage, 
        sort: $sort, 
        desa: $desa, 
        categoryID: $categoryID
        searchQuery: $searchQuery,
      ) {
        marketplaces {
          name    ID        slug    description
          rating  reviews   likes   views
          user            { name phone }
          defaultVariant  { name price }
          defaultPhoto    { URL }
          category    { name slug }
          subcategory

          createdAt
          updatedAt
        }
        pageInfo {
          ...pageInfoFields
        }
    }
  }
`),He=q(`
  query reviews($itemID: Int!, $limit: Int, $cursor: Int) {
    reviews: marketItemReviews(itemID: $itemID, limit: $limit, after: $cursor) {
      ...commonReviewFields
    }
  }
`);export{Je as I,ae as R,Ye as a,Ze as p,He as r};
