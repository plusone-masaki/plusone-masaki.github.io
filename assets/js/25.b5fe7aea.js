(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{256:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"モバイル端末で数字のみ入力させたい時のハック"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#モバイル端末で数字のみ入力させたい時のハック"}},[t._v("#")]),t._v(" モバイル端末で数字のみ入力させたい時のハック")]),t._v(" "),s("p",[t._v("みなさんご存知のHTMLですが、僕はまだまだ知らないことばかりで翻弄されてます。canvasとか、svgとか・・・")]),t._v(" "),s("p",[t._v("で、今回はHTMLのフォームでよくある "),s("strong",[t._v("「数字のみを受け付けるinputフォーム」")]),t._v(" の作り方をご紹介します。")]),t._v(" "),s("p",[s("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-9835503912749997","data-ad-slot":"5019903878"}}),t._v(" "),s("script",[t._v("\n(adsbygoogle = window.adsbygoogle || []).push({});\n")])]),t._v(" "),s("h2",{attrs:{id:"input-type-number-では文字入力を禁止できない！"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-type-number-では文字入力を禁止できない！"}},[t._v("#")]),t._v(' input[type="number"] では文字入力を禁止できない！')]),t._v(" "),s("p",[t._v("ユーザーIDの入力や二段階認証の番号入力など、フォーム内に数字だけを入力させたいという要望は、\n実務に限らず個人開発でもよくありますよね。")]),t._v(" "),s("p",[t._v("そんな時、よく使われるのは "),s("strong",[t._v('input[type="number"]')]),t._v(" 。\nむしろそれ以外が選択肢に上がるなんて考えたこともないなんて人も少なからずいるんじゃないかな？")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("しかし、なんと "),s("strong",[t._v('input[type="number"]')]),t._v(" は、\n"),s("span",{staticClass:"red"},[t._v("モバイル端末での文字入力を禁止することができません。")])]),t._v(" "),s("p",[t._v("今回の僕のタスクは"),s("span",{staticClass:"blue"},[t._v("「数字しか入力できないようにする」")]),t._v("なので、\n"),s("strong",[t._v('input[type="number"]')]),t._v(" では機能が不足してるんですね。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("input",{attrs:{type:"number",placeholder:"number"}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("JSで"),s("span",{staticClass:"blue"},[t._v("「数字以外が入力されたらはじく」")]),t._v("といったことも可能なんだけど、\nできればHTMLの力だけで簡単に解決したいし、ユーザーに違和感のない形で間違いを減らしてあげたいところ。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("strong",[t._v('input[type="number"]')]),t._v(" はキーボードの初期値を数字入力にしてくれる効果があります。\nただしキーボードの切り替えは自由にできてしまうため、今回の要件"),s("small",[t._v("（数字のみ入力）")]),t._v("を満たすことができず惜しかった。")])]),t._v(" "),s("h2",{attrs:{id:"数字キーボードを強制するなら-input-type-tel-を使う"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数字キーボードを強制するなら-input-type-tel-を使う"}},[t._v("#")]),t._v(' 数字キーボードを強制するなら input[type="tel"] を使う')]),t._v(" "),s("p",[t._v("もったいぶるような内容でもないので見出しに答えを書いてしまいましたが、  "),s("strong",[t._v("number")]),t._v(" の代わりに "),s("strong",[t._v("tel")]),t._v(" を使います。")]),t._v(" "),s("p",[t._v("すると電話番号入力用のキーボードに固定されるため、数字入力を強制できるというわけです。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("placeholder")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("input",{attrs:{type:"tel",placeholder:"tel"}}),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"さいごに"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#さいごに"}},[t._v("#")]),t._v(" さいごに")]),t._v(" "),s("p",[t._v("いくら入力方法を強制したからといって、サーバーに送信するデータを強制したわけではないので、\nバリデーション"),s("small",[t._v("（入力値の検証）")]),t._v("を省略していい理由にはなりません。")]),t._v(" "),s("p",[t._v("ユーザーが入力したデータは、必ずサーバサイドでバリデーションしましょう。")])])}),[],!1,null,null,null);a.default=e.exports}}]);