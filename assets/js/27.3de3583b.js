(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{258:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"aws-s3の静的ホスティングでクエリパラメータが消失する"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-s3の静的ホスティングでクエリパラメータが消失する"}},[t._v("#")]),t._v(" AWS S3の静的ホスティングでクエリパラメータが消失する")]),t._v(" "),s("p",[t._v("S3の静的サイトホスティング機能とNuxtの静的サイトジェネレータ機能を使ってアプリを開発している際、\nセットしたクエリパラメータが消失するという事態が起きました。")]),t._v(" "),s("p",[t._v("静的ページを配置する関係上、ルーティングに関しては様々な要因のエラーが考えられるんですが、\n今回はパス末尾に "),s("code",[t._v("/")]),t._v(" が付くようにリダイレクトがかかっており、リダイレクトの過程でクエリパラメータが外されていたのが原因でした。")]),t._v(" "),s("h2",{attrs:{id:"仕組み"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#仕組み"}},[t._v("#")]),t._v(" 仕組み")]),t._v(" "),s("p",[t._v("S3の静的ホスティングを使っている場合、下記の流れでファイル探索を行っている影響で末尾にスラッシュが付いてしまうらしい。")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("/path/to/file")]),t._v(" というファイルがあればそれを表示")]),t._v(" "),s("li",[s("code",[t._v("/path/to/file/")]),t._v(" のディレクトリ内に "),s("code",[t._v("index.html")]),t._v(" があればそれを表示")]),t._v(" "),s("li",[t._v("いずれも存在しなければエラー")])]),t._v(" "),s("br"),t._v(" "),s("p",[s("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-9835503912749997","data-ad-slot":"5019903878"}}),t._v(" "),s("script",[t._v("\n(adsbygoogle = window.adsbygoogle || []).push({});\n")])]),t._v(" "),s("h2",{attrs:{id:"対処方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#対処方法"}},[t._v("#")]),t._v(" 対処方法")]),t._v(" "),s("p",[t._v("AWS側で対処するには、なんともハックなやり方しか出てこないので "),s("strong",[t._v("スマートじゃない")]),t._v("。")]),t._v(" "),s("p",[t._v("ならばと思い、"),s("span",{staticClass:"blue"},[t._v("Nuxt.js")]),t._v("のドキュメントを見てたらありました！\n"),s("a",{attrs:{href:"https://ja.nuxtjs.org/api/configuration-router/#trailingslash",target:"_blank",rel:"noopener noreferrer"}},[t._v("router.trailingSlash"),s("OutboundLink")],1),t._v("というプロパティ。")]),t._v(" "),s("p",[t._v("やり方は簡単、 "),s("code",[t._v("nuxt.config.js")]),t._v(" に下記を追記するだけ。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nuxt.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    trailingSlash"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("これをセットすることで、末尾の / が有効になり、 "),s("code",[t._v("/path/to/file/")]),t._v(" がデフォになります。\n気持ち的にはスラッシュなしに寄せたかったけど、AWSの仕様的に厳しそうなのと、あんまりこだわるような部分でもないのでこれで良しとしました。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意点")]),t._v(" "),s("p",[t._v("リンクのURLなどで、 "),s("code",[t._v('to="/path/to/absolute"')]),t._v(" のようにパス指定してる場合は404エラーになってしまうため、\nきちんと手動で末尾に "),s("code",[t._v("/")]),t._v(" を付けるようにしましょう。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);