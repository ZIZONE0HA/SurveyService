# 🧾SurveyService


🌏[설문조사 서비스 배포](https://survey-service.vercel.app/) <br/><br/>
🗒️[개발 문서 정리](https://jungle-newt-c1e.notion.site/SurveyService-157966e9405a80d0afe4de6b953062c7?pvs=4)

<br>

### 시작하기
해당 프로젝트를 열고 다음과 같이 명령어를 실행해주세요.
```
npm i
```
```
npm run dev
```
<br><br>

## 프로젝트 개요


### 목적
- 설문조사 작성, 수정, 조회 및 관리를 간편하게 제공.
- 브라우저 기반의 설문 데이터 저장(localStorage 활용).
- React.js와 Vite를 활용한 모바일 웹 중심의 클라이언트 개발.

<br>

### 주요 기능
- 설문조사 리스트 조회
- 설문조사 상세 보기
- 설문조사 작성 및 질문/옵션 추가

<br>

### 개발환경 및 기술스택
- React (v18.3.1) / React DOM (v18.3.1) / React Router DOM (v7.0.2)
- Vite (v6.0.1)
- ES Module (type: "module")
- JavaScript / CSS / HTML
- 데이터 저장소 : localStorage
- 배포 :  vercel




```
SurveyService
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 02
│  │  │  └─ fa78452ea9f2559f1024b08fc88e82ce856bfb
│  │  ├─ 04
│  │  │  ├─ 1c739180245305aee81eb891bb8c4cc6f7d3bc
│  │  │  └─ f5298fe15d3c73078dd6e2363ff4918cd5fd49
│  │  ├─ 05
│  │  │  └─ ba7d605de0acd720db6b02e303e6bc21a1ba61
│  │  ├─ 06
│  │  │  └─ 6dac3675c623f96db67cb2c6ec1d7cd48bc845
│  │  ├─ 0c
│  │  │  └─ 589eccd4d48e270e161a1ab91baee5e5f4b4bc
│  │  ├─ 0d
│  │  │  └─ d1708c28616bff287200b48e5de2e8f788c409
│  │  ├─ 12
│  │  │  └─ 5f513af83b8f8ce9690b92f326d5a0d2599639
│  │  ├─ 16
│  │  │  └─ 34bb137364505607371d3f7370d93690a2d438
│  │  ├─ 19
│  │  │  └─ 7fa8bee853d4896e3de382625d4b90b83a16eb
│  │  ├─ 1b
│  │  │  └─ ef51618c9196a528cefe98459a05bcda234135
│  │  ├─ 1d
│  │  │  └─ 0516d483384f7326ab66a6181cd504b84ffc7d
│  │  ├─ 1e
│  │  │  ├─ 0c2a9898b1fc10c276cae9df24a17704556dad
│  │  │  └─ 960cff8bb2a076ad653cb0b85794f3ec7fee9e
│  │  ├─ 21
│  │  │  ├─ 1077497b91487172b03229c9a081ce5741a984
│  │  │  └─ 5ab78cb41812a78402a2bc9c3eb4aab2debadf
│  │  ├─ 23
│  │  │  ├─ 5272c3569624255982410cc4be5eb047b39e8a
│  │  │  └─ 8d2e4e6436b353404369d9a59fda5f1f980657
│  │  ├─ 24
│  │  │  └─ eec9741b21b2485d4f27f5780acd4471b3c4a2
│  │  ├─ 25
│  │  │  ├─ 4f899ba2f8269fff94d2477c788d5fdf45de0f
│  │  │  ├─ 7592a6740736a2e03f2f5283fd5d93ea728012
│  │  │  └─ f7a63ee61941357719d9f9bdfc6d2b7d59f36b
│  │  ├─ 26
│  │  │  ├─ b4a732159323f4c90f1e2bdeb174dfe20515ab
│  │  │  └─ ca4d7995d032f5464931adcd454ee56c5d4f36
│  │  ├─ 27
│  │  │  └─ f390f614ccaf99bf5f34da2a26522b9b6b5a73
│  │  ├─ 28
│  │  │  └─ 067ab43f253e4402bb791ecae29bb54195f7f6
│  │  ├─ 2d
│  │  │  └─ 09dba4f49c82b8bf43f1a78da167f07755608f
│  │  ├─ 30
│  │  │  └─ a934533785d735e888c90590aa6301cfe59786
│  │  ├─ 33
│  │  │  └─ e482126e4079bb58360878589b8feb630e81fa
│  │  ├─ 35
│  │  │  ├─ d201adc4ebb29799705d3db07470094f4bb6dc
│  │  │  └─ eab08c368ef63dce57795694553901d1e93ca2
│  │  ├─ 39
│  │  │  └─ 1c5368f1f4d5e1dffddb1f86d1bcdbbd6242fb
│  │  ├─ 3c
│  │  │  └─ 669e03b97ce8b7a980af462ffc98c38180024a
│  │  ├─ 3d
│  │  │  └─ eb629812300fe6822a356a5eb590821024cdee
│  │  ├─ 3e
│  │  │  ├─ 60fcf67135a49649acfdcfc000010cfbee97b0
│  │  │  ├─ b66ade00ec9a4224fc6e02ea4ca91511ccab78
│  │  │  └─ fffd399b112acd1d72beaf60b72207025f0725
│  │  ├─ 3f
│  │  │  └─ 30befb70f1d45e316c5ce1e01d3cd8830f4115
│  │  ├─ 40
│  │  │  └─ 4660a5b507cb8425cf8599eb781aa6509e1515
│  │  ├─ 44
│  │  │  └─ 198e55b57562f6015150219919650e57eb75c1
│  │  ├─ 45
│  │  │  └─ 5b7ed31910df22c8540c8d00088009545c42a6
│  │  ├─ 48
│  │  │  └─ 9a28b58fe08a1c8ea16eaf1b987e66b6f7d5d0
│  │  ├─ 49
│  │  │  └─ 0e29a9b8d25ed4ea3d8c7a59acb50110730766
│  │  ├─ 4a
│  │  │  └─ c54ea6531b6f16a1a2c9643f7599d8395c4a8e
│  │  ├─ 4c
│  │  │  └─ d9ed683271ad52bf887ddc3e28fd7e4721acf3
│  │  ├─ 4e
│  │  │  └─ 5b2bdab7d697d3feb00bf2bbf73ae8092ced5c
│  │  ├─ 4f
│  │  │  ├─ da2e3e0ba9a8ba82d7aa1ce92c90a9a2d6f6c5
│  │  │  └─ f07d5bec52bd506495b6b550415ca55332a98d
│  │  ├─ 53
│  │  │  └─ a2ff9dcc9d304b2d461c7f8c47d15629e14b0a
│  │  ├─ 55
│  │  │  └─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  ├─ 57
│  │  │  └─ b0f177842f1cdafb3d740b23cf1f5d1b9dc874
│  │  ├─ 58
│  │  │  ├─ 00946796b19ebb142ed50faed07be06ff66991
│  │  │  └─ d3b11092b61b0edb55c39383dfa672b8a35d8f
│  │  ├─ 59
│  │  │  └─ 257fcd9eb3b8aa54fe4acabc02c650365dc89d
│  │  ├─ 5a
│  │  │  ├─ 8d13ecf924716f1462fb219c9dc38b461f2a81
│  │  │  └─ 9d0873f50a4d290e61c5a90e4b490f4651c0bc
│  │  ├─ 5b
│  │  │  └─ 72aaca64ab8b02b6bf79c6f8f9c8b0370c7623
│  │  ├─ 5f
│  │  │  └─ 05667b762f0763697b90c62c74cb9e6ebd7ba3
│  │  ├─ 61
│  │  │  ├─ 19ad9a8faaa5073a454f67b50fb98a25972fd2
│  │  │  └─ 751564aeb2002fdf965e1708fa8000d880c4de
│  │  ├─ 62
│  │  │  ├─ 389a068212c0bd13974f92388f9c846ee40c8e
│  │  │  ├─ 55b6e8545a9129316e7562da36c7a221a4db51
│  │  │  └─ e38774b7d08e5183e539b324d4e36c40781109
│  │  ├─ 63
│  │  │  ├─ 32ee35dd68745808eccd97829d5c44722e9de1
│  │  │  └─ ba06e2a1bab34f15e9dfdae2e9b0c1dab2378e
│  │  ├─ 66
│  │  │  ├─ 15fca18f243590ddd5c5dc149f2af0a562c990
│  │  │  └─ 3d4e9ed6c116fb85daac86ddd9c755b32cfba0
│  │  ├─ 68
│  │  │  └─ 45f42539f8b12419abcaa6a67004e053f54ddf
│  │  ├─ 69
│  │  │  ├─ af78d012372ac91553d9c8f35ea8e3be958aac
│  │  │  └─ db9fbd7de6a3909af0963e485e584cfa2756d3
│  │  ├─ 6c
│  │  │  ├─ 3bc43032341c4a48c3308a489a4cdc4b176651
│  │  │  ├─ 696b5aa42b1012eb5421f028ba9d4a5ef3ce52
│  │  │  └─ 87de9bb3358469122cc991d5cf578927246184
│  │  ├─ 70
│  │  │  └─ a579c35d6f16a80b129e944de639b3f01ccd49
│  │  ├─ 74
│  │  │  └─ da508083277ea528c859b007b62ec52824e7a0
│  │  ├─ 75
│  │  │  └─ de970d574abaf3fac95618d35425a553592107
│  │  ├─ 76
│  │  │  └─ d208bebd4b55c5f3a2453d09ce5bf48cd2d6b5
│  │  ├─ 77
│  │  │  └─ 023b147fc2b3517bd3e6fd9461dbc66b8deb5d
│  │  ├─ 79
│  │  │  ├─ 89e1dcca678e0d45d16f1561a247725bb2a4a7
│  │  │  └─ dbe746576ca5fdb8e922692e76e8094cd77d03
│  │  ├─ 7a
│  │  │  └─ 5c1bc1ea2bf77612ada640608e7348ac181503
│  │  ├─ 7b
│  │  │  └─ 6d8dd699804d61df6f5ceb615cbcc7f2851643
│  │  ├─ 7d
│  │  │  └─ fdfdde0e8bbd971b553488017357d70bbb0347
│  │  ├─ 7f
│  │  │  └─ 6c0ca7aa56a5f953da9c702d88057b58d452c5
│  │  ├─ 80
│  │  │  └─ f3af1fb2f085e6f5174bd4662739c0a2a63b79
│  │  ├─ 86
│  │  │  ├─ 4a22eac4f55c83def663c009eb4eb80cc04968
│  │  │  ├─ 4b361e1d27db60e491e1632c8de385ea9142bd
│  │  │  └─ 9e11a123c06917592ff66e9dd709e222d463b9
│  │  ├─ 88
│  │  │  └─ ec888b5caf47a5743cb246e79dbaaec6ba7ef3
│  │  ├─ 8b
│  │  │  ├─ 0f57b91aeb45c54467e29f983a0893dc83c4d9
│  │  │  └─ 531585fd2a5bac589e62b681e82cc6782b3a4e
│  │  ├─ 8c
│  │  │  └─ 2ca27a903ee4b2f80f57a961dcb5ed1fe94519
│  │  ├─ 8e
│  │  │  └─ a2c3b00af6eed38d1e5203ae909cb206c2e5a6
│  │  ├─ 8f
│  │  │  └─ 6824f5acda8b94bc3f46230b2d071a9cd478e8
│  │  ├─ 91
│  │  │  └─ e5d86e681a69a0333c91600f623836dd62011c
│  │  ├─ 92
│  │  │  └─ 7cc3515e8e744bf3d7a5f9aa4819fc22930d22
│  │  ├─ 94
│  │  │  ├─ c0b2fc152a086447a04f62793957235d2475be
│  │  │  └─ cacbd154bf06573168983a4f870f2921270aad
│  │  ├─ 95
│  │  │  ├─ 87cc36c216be00b13b822e955511b51a0aa79e
│  │  │  └─ df11d0bad2aec82c7c1fbd35b0b08905245808
│  │  ├─ 96
│  │  │  ├─ 3a9626264efb3f13db8d353c5537cd9dd9c98e
│  │  │  └─ e5bf8cb1e6896cc05842a613ce42f2f3f9cc98
│  │  ├─ 9c
│  │  │  ├─ 71fcff25bd34c96008002ce29e75b5ad2fcc58
│  │  │  ├─ 82480a6f72c1c3a63c9b726d9b58c0c667b823
│  │  │  └─ 922a9a8931b1b7a26ba05474e88de4505386b0
│  │  ├─ 9d
│  │  │  └─ 9449ecc9928dee0792a44d8a6646faffde42e1
│  │  ├─ 9e
│  │  │  └─ 9901845c2bfb67f246ce0e218c8e6b85e0b334
│  │  ├─ a1
│  │  │  └─ 29525a5d8aa018f0d42ab1ac8989235753123e
│  │  ├─ a2
│  │  │  └─ 0d5351b09c315d47d36da7338e284eb8cb35f9
│  │  ├─ a5
│  │  │  ├─ 39aadd981014dffad620e7e7b54e915c1b7743
│  │  │  └─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  ├─ a8
│  │  │  └─ a352976be93142aa1d6adaed78be41bd59689b
│  │  ├─ ac
│  │  │  ├─ 2fe8a7949de545e61d63783d8b6d37dcfafe21
│  │  │  └─ 6ebd29cba8453628e31116bf8646530abcf336
│  │  ├─ ad
│  │  │  └─ 1df34c0fad07fd9f790d1ab90b7206bfff5389
│  │  ├─ b3
│  │  │  └─ d376bae9b7e634c326583801f72410d9a369dd
│  │  ├─ b7
│  │  │  └─ b24c1a74ddb1e94da0a5139edad362068a2a10
│  │  ├─ b9
│  │  │  ├─ 758bc9c4e62e3d5f33c998c1d2d449be172e9e
│  │  │  ├─ a1a6deac8775b5598874b2bc3c7971d82cf211
│  │  │  ├─ d355df2a5956b526c004531b7b0ffe412461e0
│  │  │  └─ ff30c9c6e456606f0f73ca842c0a448a94c10f
│  │  ├─ ba
│  │  │  ├─ 14c0b9106f04372013e5e8e1dd2c21861845ee
│  │  │  ├─ 4eb7ec9bad2210f0775ae6cae580a827f2d49d
│  │  │  └─ a8a142669b46f4244e394992b29867b259f4cb
│  │  ├─ bb
│  │  │  ├─ 544653d7ee8bff8a868c579f341b99e4048469
│  │  │  └─ 59d12ba9826344e094c4b2a062204933807db3
│  │  ├─ bc
│  │  │  └─ 835754504acef706d58f89b164a823a846739a
│  │  ├─ bd
│  │  │  └─ 21edb7bcdcc788eff89b1a20b0151132b276e1
│  │  ├─ c0
│  │  │  ├─ 8ede41da049d13456abc417cfef28dc3b5f1dd
│  │  │  └─ fcd97ce21ca599091279ba9a899d55e5ba919f
│  │  ├─ c1
│  │  │  ├─ 9985c95ba55f211a490953e821628e98d51c44
│  │  │  └─ e193bcd8c1ca7017d214a7d9c9024b7dc870cb
│  │  ├─ ca
│  │  │  ├─ d768bd8a19b33208dc8f7102a4405a4e30b976
│  │  │  └─ dde0fbcbcb63e8ed7dd5303b78c4a1b978bb06
│  │  ├─ cc
│  │  │  └─ 09dadcaea15cedc746fcd96b6e69ef7a6cebdf
│  │  ├─ cd
│  │  │  └─ 8a28b9a6ca593ce2eb76975e1f74b8dfb8ec5a
│  │  ├─ ce
│  │  │  └─ 141ba186dc2184483511f0c0d6443728610103
│  │  ├─ d0
│  │  │  └─ 928966a2f15cf2fb5f682a73e0c9f5da70bbbf
│  │  ├─ d2
│  │  │  └─ 6db74afadda18620553be9e06c8b1698fe5c72
│  │  ├─ d4
│  │  │  └─ 82cbff928e62f10152603e16b63b8fec4eb35c
│  │  ├─ d7
│  │  │  └─ 714ee2b2646089bc6b74037bfba039b7dcb743
│  │  ├─ e3
│  │  │  ├─ 01de1b34c9a1a9e6e0ba2eaa2467b0fc98f996
│  │  │  ├─ 67a7fdad0374e5b14603c05235fa37f7e54154
│  │  │  ├─ 688244640f913e61c72c7c09023b27186f6219
│  │  │  └─ 9ac310afde7ca3922ee31a08c0714ed7cd4d7f
│  │  ├─ e4
│  │  │  └─ eeed88009679e1d78218d827715366e62ef04d
│  │  ├─ e5
│  │  │  ├─ 4599f33cd3f8f41b1669cda9267b7682d5b508
│  │  │  └─ 91e9bbab6a0d4cc89b7171401441e9f856ce35
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  ├─ ac49687ceef3d922c43bf72a4a84e6318f8e2d
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ e8
│  │  │  └─ 8aaaeebaf7ab92fef84f7b42c4df89356e600e
│  │  ├─ e9
│  │  │  ├─ c74a143a6e48713c369692ba560b540df757dd
│  │  │  └─ e384337b6ce4b2f9df23ac015101c20756575a
│  │  ├─ eb
│  │  │  ├─ 75f4d780fc1b5d39a855cdc6774f202dd3bbc9
│  │  │  └─ b399581b44fc285b64924cc180e8fe645b4490
│  │  ├─ ee
│  │  │  └─ 30e0ecfabc29f0d03037a42b49afc94f8016e6
│  │  ├─ f0
│  │  │  └─ 2b722ceae3138bfd8ce28baba499676a347291
│  │  ├─ f1
│  │  │  └─ 2e9e9625af70309517d6fc45ae92453eae405c
│  │  ├─ f2
│  │  │  └─ 7138eb8d19beb148c0842cdb5a37e1684209d3
│  │  ├─ f3
│  │  │  └─ 081350baa1eca3293b8ed78f5f2e0ac921138d
│  │  ├─ f5
│  │  │  ├─ 116a85f6e072bd2fb5433b599eb149242cad44
│  │  │  └─ 546b1c716f83e0e871cb0bb58784e9e6bf3cf0
│  │  ├─ f6
│  │  │  ├─ 09b7b01049eb275e93bf74b545c1d80458db78
│  │  │  └─ 7355ae04c4000eef464262481f6b02daa50789
│  │  ├─ f7
│  │  │  └─ 68e33fc946e6074d6bd3ce5d454853adb3615e
│  │  ├─ f8
│  │  │  └─ b49d61047ea75c70ff190bbf4e9ecf6cee0a41
│  │  ├─ fb
│  │  │  └─ 20d43e62ffe570b1a8b6ab3016cbcee2d940d8
│  │  ├─ fc
│  │  │  └─ 011f503cc503160e17c14eeca44bf0ac0fa23d
│  │  ├─ fe
│  │  │  ├─ 94c61b863601994417b3ec566767d2fd316e47
│  │  │  ├─ f154ca2c798d200868e16c0871d090cfae6e25
│  │  │  └─ f6e889aecd273deea82d511e5d103520ad8cbc
│  │  ├─ ff
│  │  │  └─ ea7879d2100f201265d2f10f640d2eef118cc7
│  │  ├─ info
│  │  └─ pack
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  ├─ components
│  │  ├─ Button
│  │  │  ├─ Button.css
│  │  │  └─ Button.jsx
│  │  ├─ Form
│  │  │  ├─ Form.css
│  │  │  └─ Form.jsx
│  │  ├─ Header
│  │  │  ├─ Header.css
│  │  │  └─ Header.jsx
│  │  ├─ Modal
│  │  │  ├─ Modal.css
│  │  │  └─ Modal.jsx
│  │  ├─ OptionItem
│  │  │  ├─ OptionItem.css
│  │  │  └─ OptionItem.jsx
│  │  ├─ OptionList
│  │  │  ├─ OptionList.css
│  │  │  └─ OptionList.jsx
│  │  ├─ QuestionItem
│  │  │  ├─ QuestionItem.css
│  │  │  └─ QuestionItem.jsx
│  │  ├─ QuestionList
│  │  │  ├─ QuestionList.css
│  │  │  └─ QuestionList.jsx
│  │  ├─ SurveyInventory
│  │  │  ├─ SurveyInventory.css
│  │  │  └─ SurveyInventory.jsx
│  │  └─ SurveyItem
│  │     ├─ SurveyItem.css
│  │     └─ SurveyItem.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ mockdata.js
│  ├─ pages
│  │  ├─ NotFound.jsx
│  │  ├─ SurveyCreate.jsx
│  │  ├─ SurveyList.jsx
│  │  └─ SurveyView.jsx
│  └─ utils
│     ├─ formatDate.js
│     ├─ getTodayDate.js
│     ├─ onDateInputChange.js
│     └─ validateSurvey.js
└─ vite.config.js

```