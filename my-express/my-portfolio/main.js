import './style.css'
// import javascriptLogo from './javascript.svg'
import myPro from './pro.jpg'
import sklls from './skills.jpg'
import blogs from './thought-catalog-o0Qqw21-0NI-unsplash.jpg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { ageCounter } from './counter.js'
import { blogSet } from './blog.js'
import { blogGet } from './blog.js'

//どの画面を表示させるか
window.onload = function() {
  const currentUrl = window.location.href;
  //メイン画表示
  if(currentUrl.indexOf('blog/show')==-1 &&
  currentUrl.indexOf('blog/create')==-1){

    //ヘッダーメニュー
    document.querySelector('#headerMenu').innerHTML = `
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center " style="position: fixed; z-index:2; flex-direction: column; margin-top: 45%; margin-left: -8%;">
            <a onclick="selectMenu('Home')" class="mb-5 text-black hover:text-gray-400 block" style="font-size: 30px;">Home</a><br>
            <a onclick="selectMenu('AboutMe')" class="mb-5 text-black hover:text-gray-400 block" style="font-size: 30px;">About Me</a><br>

            <a onclick="selectMenu('ResumeCV')" class="mb-5 text-black hover:text-gray-400 block" style="font-size: 30px;">Resume / CV</a><br>
            <a onclick="selectMenu('Skills')" class="mb-5 text-black hover:text-gray-400 block" style="font-size: 30px;">Skills</a><br>
            <a onclick="selectMenu('BlogArticles')" class="mb-5 text-black hover:text-gray-400 block" style="font-size: 30px;">Blog / Articles</a><br>
            <a onclick="selectMenu('Contact')" class="mb-5 text-black hover:text-gray-400 block" style="font-size: 30px;">Contact</a>
          </nav>
        </div>
      </header>
    `




    document.querySelector('#Home').innerHTML = `
      <div style='height: 800px; justify-content: center;
      align-items: center;'>
        <h2 class='title fade-in-from-top'>Welcome to my engineering portfolio site!</h2>
      </div>
    `
    document.querySelector('#AboutMe').innerHTML = `
    <div class="AboutMe">
      <div class="aboutMeContents">
      <h1 style="width: 400px; border-bottom: 1px solid #000;">AboutMe</h1>
          <p>
            name: 新井勇大
          </p>
          <p id='age'>
          age:
          <p/>
          <p>from：長野県 長野市</p>
          <p>hobby：筋トレ　サウナ</p>
          <br>
          <p class="aboutMeP" style="width: 80%; white-space:normal;" class="text-gray-600">
          高校時代はソフトテニスでインターハイに出場。
          体を動かすことが好きで週4回、ジムでトレーニングしています。
          </p>
      </div>

        <img id="myPro" style='width: 25%; height: auto; float: right; margin-right:5%;' src="${myPro}" class="logo vanilla" alt="JavaScript logo" />
    </div>

        `
    ageCounter(document.querySelector('#age'))


    document.querySelector('#ResumeCV').innerHTML = `
    <section class="text-gray-600 body-font cv-sec" _msthidden="12" >
    <h1 class="cv-title" style=" margin-left: 30%; border-bottom: 1px solid #000; width: 400px;">Resume / CV</h1>
    <div class="container px-5 py-24 mx-auto flex flex-wrap" _msthidden="12">
      <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto" _msthidden="3">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-24 h-24 rounded-full mt-10 sm:mt-0 -ml-8 inline-flex items-center justify-center bg-indigo-500 text-white relative z-3 title-font font-medium text-sm" _msttexthash="4459" _msthidden="1" _msthash="2328">2018年</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" _msthidden="2">
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0" _msthidden="2">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl" _msttexthash="232921" _msthidden="1" _msthash="2329">現金輸送-機械警備会社に就職</h2>
            <p class="leading-relaxed" _msttexthash="6235814" _msthidden="1" _msthash="2330">
              社会人一年目はITとは無関係の仕事をしていました。
            </p>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto" _msthidden="3">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-24 h-24 rounded-full mt-10 sm:mt-0 -ml-8 inline-flex items-center justify-center bg-indigo-500 text-white relative z-3 title-font font-medium text-sm" _msttexthash="4459" _msthidden="1" _msthash="2328">2020年</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" _msthidden="2">
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0" _msthidden="2">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl" _msttexthash="204971" _msthidden="1" _msthash="2332">未経験で都内ITベンチャー企業へ転職</h2>
            <p class="leading-relaxed" _msttexthash="6235814" _msthidden="1" _msthash="2333">
            IT業界に興味を持ち始め22歳の時思い切って都内の社員数30名、平均年齢20代のベンチャー企業へ転職。同時に先輩エンジニアからプログラミングについて教わっていました。<br>
            インターホンと連動したセキュリティスマホアプリ
：テスター<br>
            経済産業省：データ入力<br>
            一般住宅用Wi-Fiシステム：テクニカルサポート<br>
            決済システム：テクニカルサポート<br>
            医療用システム：テクニカルサポート<br>



            </p>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto" _msthidden="3">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-24 h-24 rounded-full mt-10 sm:mt-0 -ml-8 inline-flex items-center justify-center bg-indigo-500 text-white relative z-3 title-font font-medium text-sm" _msttexthash="4459" _msthidden="1" _msthash="2328">2021年</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" _msthidden="2">
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0" _msthidden="2">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl" _msttexthash="154011" _msthidden="1" _msthash="2335">地元長野県で受託開発会社へ転職</h2>
            <p class="leading-relaxed" _msttexthash="6235814" _msthidden="1" _msthash="2336">
              23歳の時、地元長野県の企業にも興味を持ち転職しました。<br>
              物流会社-販売管理システム 受託開発 担当業務：詳細設計 開発　テスト　保守運用<br>
              自社用-勤怠管理システム　担当業務：要件定義　詳細設計 開発　テスト　保守運用<br>
              現在に至ります。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `

    document.querySelector('#Skills').innerHTML = `

    <h1 style="text-align: center;">Skills</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <!-- グリッドアイテム2 -->
      <div class=" p-4">
        <div class="skill-tab" style='display: flex; margin-bottom: 14px;'>
          <p class="skill-l" style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px; height:50px;">
            Laravel
          </p>
          <p style="margin-top: 10px;">
            &nbsp;:2年半( v5  v6  v9 )
          </p>
        </div>

        <div class="skill-tab" style='display: flex; margin-bottom: 14px;'>
          <p class="skill-l" style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px;  height:50px;">
            MYSQL
          </p>
          <p style="margin-top: 10px;">
            &nbsp;:2年半
          </p>
        </div>

        <div class="skill-tab" style='display: flex; margin-bottom: 14px;'>
          <p class="skill-l" style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px; height:50px;">
          Vanilla.Js
          </p>
          <p style="margin-top: 10px;">
            &nbsp;:2年半
          </p>
        </div>




        <div class="skill-tab" style='display: flex; margin-bottom: 14px;'>
          <p class="skill-l" style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px; height:50px;">
            Vue.js
          </p>
          <p style="margin-top: 0px;">
            &nbsp;:少し(Laravel vue <br>&nbsp;&nbsp; Inertia viteで使用)
          </p>
        </div>

        <div style='display: flex; margin-bottom: 14px; margin-top: -12px;'>
          <p class="skill-l" style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px;  height:50px;">
            React.js
          </p>
          <p style="margin-top: 10px;">
            &nbsp;:少し
          </p>
        </div>





      </div>
      <!-- グリッドアイテム3 -->
      <div class="p-4">





      <div class="scand-g" style='display: flex; margin-bottom: 14px;'>
        <p class="skill-l" style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px;">
        Git
        </p>
        <p style="margin-top: 10px;">
          &nbsp;:2年半( Hub Lab )
        </p>
      </div>

      <div class="skill-tab" style='display: flex; margin-bottom: 14px;'>
          <p class="skill-l" style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px; height:50px;">
          Docker
          </p>
          <p style="margin-top: 0px;">
            &nbsp;:開発環境構築<br>&nbsp;&nbsp;できる程度
          </p>
        </div>


        <div style='display: flex; margin-bottom: 14px; margin-top: -12px;'>
          <p class="skill-l" style="background-color: gray; font-size: 30px; border-radius: 10px 100px / 120px; text-align: center; width: 170px; height:50px;">
          XAMMP
          </p>
          <p style="margin-top: 10px;">
            &nbsp;:2年半
          </p>
        </div>




    </div>
    </div>
    <div style="height: 300px;">
        </div>


    `







  document.querySelector('#BlogArticles').innerHTML = `
    <div class="blogBlock">
    <img id="myPro" style='width: 35%; height: auto; margin-left: 10%;' src="${blogs}" alt="JavaScript logo" />
    <div class="blogcontents">
    <h1 style="text-align: center; margin-top: 60px; margin-bottom: 20px;"><span style="border-bottom: 1px solid #000; padding-bottom: 5px;">Blog</span></h1>
      <ul id='blog' class="list-disc list-inside">
        <!-- ブログのリスト項目 -->
      </ul>
    </div>
</div>
<div style="height: 30%;"> </div>
    `;
    blogSet(document.querySelector('#blog'));


    document.querySelector('#Contact').innerHTML = `
    <section class="text-gray-600 body-font relative" _msthidden="8">
      <div class="container px-5 py-24 mx-auto" _msthidden="8">
        <div class="flex flex-col text-center w-full mb-12" _msthidden="2">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" _msttexthash="132405" _msthidden="1" _msthash="146">Contact Us</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base" _msttexthash="3498859" _msthidden="1" _msthash="147">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto" _msthidden="6">
          <div class="flex flex-wrap -m-2" _msthidden="6">
            <div class="p-2 w-1/2" _msthidden="1">
              <div class="relative" _msthidden="1">
                <label for="name" class="leading-7 text-sm text-gray-600" _msttexthash="43069" _msthidden="1" _msthash="148">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>
            <div class="p-2 w-1/2" _msthidden="1">
              <div class="relative" _msthidden="1">
                <label for="email" class="leading-7 text-sm text-gray-600" _msttexthash="58058" _msthidden="1" _msthash="149">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>
            <div class="p-2 w-full" _msthidden="1">
              <div class="relative" _msthidden="1">
                <label for="message" class="leading-7 text-sm text-gray-600" _msttexthash="92924" _msthidden="1" _msthash="150">Message</label>
                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div class="p-2 w-full" _msthidden="1">
              <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" _msttexthash="79859" _msthidden="1" _msthash="151" onClick="contactSubmit()">送信</button>
            </div>
            <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center" _msthidden="2">
              <a class="text-indigo-500" _msttexthash="327145" _msthidden="1" _msthash="152">example@email.com</a>
              <p class="leading-normal my-5" _msttexthash="596453" _msthidden="1" _msthash="153">49 Smith St.
                <br>Saint Cloud, MN 56301
              </p>

              <!--
              <span class="inline-flex">
                <a class="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a class="ml-4 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a class="ml-4 text-gray-500">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a class="ml-4 text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
              -->
            </div>
          </div>
        </div>
      </div>
    </section>
    `

  }else if(currentUrl.indexOf('blog/show')==-1){
    document.querySelector('#blogShow').innerHTML =`
    <div style="margin-left: 30%;">
      <input type="text" name='title' id='blogTitle' style="width: 300px;">
      <br><br><br>
      <textarea name='contents' id='blogContents' style="width: 700px; height: 700px;">
      </textarea>
    <br>
      <div class="p-2 w-full" _msthidden="1">
        <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" _msttexthash="79859" _msthidden="1" _msthash="151" onClick="blogCreate()">submit!!</button>
      </div>
    </div>





    `;







  }else{
    document.querySelector('#blogShow').innerHTML = `


    <div class='divBtn mx-auto mt-5 p-4 block rounded-lg'>
      <button class="back-btn text-black hover:text-white focus:outline-none font-bold py-2 px-4 rounded" onclick="history.back()" style="font-size: 30px;">
      <<戻る
      </button>
    </div>

    <div class="blogTitle" style='font-size: 30px;' id="blogTitle">
    </div>

    <div class=" mx-auto mt-5 p-4 bg-white block shadow-lg rounded-lg Headline contentsBlockBlog">


      <div id="blogContents">
      </div>
    </div>
    `;
    blogGet(document.querySelector('#blogTitle'),document.querySelector('#blogContents'));
  }

  // console.log(currentUrl.at(-1));

}
