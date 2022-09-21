'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
userNameInput.onkeydown = event =>{
    if(event.key === 'Enter'){
        assessmentButton.onclick();
    }
}
assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return;
    }

    resultDivided.innerText = "";
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    tweetDivided.innerText = "";
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('おすすめの夕飯') + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet おすすめの夕飯';
    tweetDivided.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', "https://platform.twitter.com/widgets.js");
    tweetDivided.appendChild(script);
};

const answers = [
    '{ userName }の夕飯はお寿司です。{ userName }へのおすすめはマグロの赤身の握りです。',
    '{ userName }の夕飯は焼肉です。{ userName }は誰かにおごってもらいましょう。',
    '{ userName }の夕飯はラーメンです。{ userName }には貝出汁ラーメンがおすすめです。',
    '{ userName }の夕飯はお豆腐です。{ userName }にはヘルシーかつ高たんぱくな食事を意識しましょう。',
    '{ userName }の夕飯はスンドゥブです。{ userName }は辛いもので代謝を上げましょう。',
    '{ userName }の夕飯はお刺身です。{ userName }には海の幸をお勧めします。',
    '{ userName }の夕飯は豚肉の生姜焼きです。{ userName }はビタミンを摂取して疲労回復に努めましょう。',
    '{ userName }の夕飯はハンバーグです。{ userName }にはデミグラスソースがいいでしょう。',
    '{ userName }の夕飯はオムライスです。{ userName }には半熟卵のふわふわオムライスがおすすめです。',
    '{ userName }の夕飯は唐揚げです。{ userName }へのおすすめは塩唐揚げです。',
    '{ userName }の夕飯はサラダだけです。{ userName }はもっと野菜をとりましょう。',
    '{ userName }の夕飯はコロッケです。駅前のコロッケ屋さんがおいしいので{ userName }にも食べてほしいです。',
    '{ userName }の夕飯はカレーです。{ userName }はいつもと違った具を入れてつくってみましょう。',
    '{ userName }の夕飯は焼きそばです。{ userName }にはシンプルなソース焼きそばがおすすめです。',
    '{ userName }の夕飯は卵かけごはんです。{ userName }にはっつりではなくささっと食べれるものをお勧めします。',
    '{ userName }の夕飯はエビフライです。{ userName }はたっぷりとタルタルソースをつけましょう。',
    '{ userName }の夕飯はとんかつです。{ userName }へはソースとからしをつけることをお勧めします。',
    '{ userName }の夕飯は明太子です。{ userName }はおいしい明太子を求めて福岡へいくのもありでしょう。',
    '{ userName }の夕飯は天ぷらです。{ userName }にはおろし大根と一緒に食べることをお勧めします。',
    '{ userName }の夕飯はステーキです。{ userName }はしっかりとスタミナをつけましょう。',
    '{ userName }の夕飯は担々麺です。{ userName }にはゴマの風味が強いものをお勧めします。',
    '{ userName }の夕飯は餃子です。{ userName }はたくさんニンニクの入ったものがいいでしょう。',
    '{ userName }の夕飯は油淋鶏です。ネギ油の風味の良さが{ userName }におすすめです。',
    '{ userName }の夕飯はおうどんです。{ userName }は消化の良いものを食べましょう。',
    '{ userName }の夕飯はハンバーガーです。{ userName }は健康に気にせずおいしいバーガーを食べましょう。',
];

function assessment(userName){
    let sumOfCharCode = 0;
    for(let i = 0; i < userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replaceAll('{ userName }' , userName);
    
    return result;
};