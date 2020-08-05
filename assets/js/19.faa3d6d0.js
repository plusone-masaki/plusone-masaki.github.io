(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{250:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"メールサーバのアカウント追加でドハマリした話"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#メールサーバのアカウント追加でドハマリした話"}},[s._v("#")]),s._v(" メールサーバのアカウント追加でドハマリした話")]),s._v(" "),t("p",[s._v("僕は普段遣いのメールは自鯖で管理をしているんですが、\nアカウントの追加方法でドハマリしてしまったので備忘録として書き残しておきます。")]),s._v(" "),t("h2",{attrs:{id:"アカウントの追加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#アカウントの追加"}},[s._v("#")]),s._v(" アカウントの追加")]),s._v(" "),t("p",[s._v("今回はメールアドレスのみでログインは使用しないユーザなので、nologinでユーザを追加します。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nologinでユーザ作成")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -s /sbin/nologin new_user\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# パスワードの設定")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/passwd new_user\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("特に認証方式(auth_mech)を変更していない場合、これだけで手順は完了するみたいです。")]),s._v(" "),t("p",[s._v("僕はメールサーバを構築する際に、セキュアな実装をするためにsasl入れたり方式変えたりしてるので、\nSMTP/IMAPそれぞれにユーザー登録を行う必要がありました。")]),s._v(" "),t("p",[t("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block","text-align":"center"},attrs:{"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-9835503912749997","data-ad-slot":"5019903878"}}),s._v(" "),t("script",[s._v("\n(adsbygoogle = window.adsbygoogle || []).push({});\n")])]),s._v(" "),t("h2",{attrs:{id:"smtpにユーザ追加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smtpにユーザ追加"}},[s._v("#")]),s._v(" SMTPにユーザ追加")]),s._v(" "),t("p",[s._v("SMTPサーバはpostfixというソフトで管理しているのですが、\nユーザ情報などはsaslauthdで管理しており、今回いじるのはsaslauthdの方です。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ユーザの追加")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" saslpasswd2 -c -u plus-one.tech new_user\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ユーザが追加されてることを確認")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" sasldblistusers2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# パスワード確認したい場合 ※平文で見れてしまうので要注意")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/sasldb2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" strings\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("これでSMTPの認証もできるようになりました。")]),s._v(" "),t("p",[s._v("しかし、stringsで平文見れちゃうのってセキュリティ的にどうなん？って思いますね。\nroot権限だから許容されるものなんでしょうか。")]),s._v(" "),t("h2",{attrs:{id:"imapにユーザ追加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#imapにユーザ追加"}},[s._v("#")]),s._v(" IMAPにユーザ追加")]),s._v(" "),t("p",[s._v("POP3/IMAPサーバはdovecotというソフトで管理します。\nこちらは "),t("code",[s._v("/etc/dovecot/dovecot-passwd")]),s._v(" というファイルにユーザー情報を書き込む形式になってます。\nフォーマットは "),t("code",[s._v("/etc/passwd")]),s._v(" と同じで、 "),t("code",[s._v("user_name:x:...")]),s._v(" の "),t("code",[s._v("x")]),s._v(" をパスワードに置き換える感じです。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ハッシュ化したパスワードをファイルに出力")]),s._v("\n$ doveadm pw -s CRAM-MD5 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/dovecot/dovecot-passwd\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ユーザ情報をコピペ")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/dovecot/dovecot-passwd\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最後にdovecot再起動しときましょうか")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart dovecot\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("これで認証ができるようになったと思います。")]),s._v(" "),t("p",[s._v("SMTPとIMAP両方に設定をする必要があるのと、設定方法が全然違うのが今回ハマったポイントでした。\n同じようにハマってる人の助けになれば幸いです。")])])}),[],!1,null,null,null);a.default=e.exports}}]);