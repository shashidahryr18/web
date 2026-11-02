const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const glow = $('.cursor-glow');
document.addEventListener('mousemove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});


document.addEventListener("DOMContentLoaded", () => {
    const musicFiles = {
        "index.html": "music/BRAGA MUSIC SHASHIDHAR.MP3",
        "memories.html": "music/01.mp3",
        "reasons.html": "music/02.mp3",
        "letter.html": "music/04.mp3",
        "cake.html": "music/03.mp3",
        "final.html": "music/05.mp3"
    };

    const page = location.pathname.split("/").pop().toLowerCase();
    const song = musicFiles[page];

    if (!song) return;

    let musicBtn = document.querySelector("#musicBtn");

    if (!musicBtn) {
        musicBtn = document.createElement("button");
        musicBtn.id = "musicBtn";
        musicBtn.type = "button";
        document.body.appendChild(musicBtn);
    }

    let birthdayMusic = document.querySelector("#birthdayMusic");

    if (!birthdayMusic) {
        birthdayMusic = document.createElement("audio");
        birthdayMusic.id = "birthdayMusic";
        document.body.appendChild(birthdayMusic);
    }

    birthdayMusic.loop = true;
    birthdayMusic.src = song;

    function updateButton() {
        musicBtn.textContent = birthdayMusic.paused ? "♫" : "♪";
        musicBtn.classList.toggle("playing", !birthdayMusic.paused);
    }

    // Prevent duplicate click handlers
    musicBtn.onclick = async () => {
        if (birthdayMusic.paused) {
            try {
                await birthdayMusic.play();
            } catch (error) {
                console.log("Browser blocked playback:", error);
            }
        } else {
            birthdayMusic.pause();
        }

        updateButton();
    };

    birthdayMusic.addEventListener("play", updateButton);
    birthdayMusic.addEventListener("pause", updateButton);

    updateButton();

    // Attempt autoplay when this page loads
    birthdayMusic.play().catch(error => {
        console.log("Autoplay was blocked. Click the music button once.", error);
        updateButton();
    });
});


const birthdayDate = new Date('2026-11-03T00:00:00').getTime();
function updateCountdown() {
  const countdown = $('#countdown');
  if (!countdown) return;

  const difference = Math.max(birthdayDate - Date.now(), 0);
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  $('#days').textContent = String(days).padStart(2, '0');
  $('#hours').textContent = String(hours).padStart(2, '0');
  $('#mins').textContent = String(minutes).padStart(2, '0');
  $('#secs').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const reasons = [
  'Your smile feels like sunshine.',
  'You make people feel safe.',
  'Your laugh is unforgettable.',
  'You turn simple days into stories.',
  'You care deeply.',
  'Your vibe is soft and magical.',
  'You are beautifully genuine.',
  'You make memories feel golden.',
  'Your heart is rare.',
  'You are my favorite person to annoy.',
  'You glow without trying.',
  'You make everything better.',
  'You listen like home.',
  'You are effortlessly classy.',
  'You deserve the prettiest life.',
  'You are a whole comfort place.',
  'Your presence feels peaceful.',
  'You are pure main character energy.',
  'You make friendship feel precious.',
  'You are loved more than words.',
  'You bring calm into chaos.',
  'You make every photo feel special.',
  'You have the cutest little habits.',
  'You make boring days memorable.',
  'You are gentle but strong.', 
  'You always feels like a blessing.',
  'You understand things wit  hout words.',
  'You make silence feel comfortable.',
  'You are a walking soft glow.',
  'You make people believe in kindness.',
  'You are so comfortable to me.',
  'You make celebrations feel brighter.',
  'You carry warmth wherever you go.',
  'You make tiny moments feel cinematic.',
  'You have a beautiful soul.',
  'You make me laugh at random times.',
  'You are honest in the sweetest way.',
  'You are my comfort notification.',
  'You make the world less heavy.',
  'You deserve flowers every day.',
  'You make feel happy always.',
  'You are soft, rare, and precious.',
  'You make every plan more exciting.',
  'You are naturally elegant.',
  'You care even when nobody notices.',
  'You are full of pretty energy.',
  'You make to feel magical.',
  'You are the reason behind many smiles.',
  'You make ordinary things memorable.',
  'You are a safe place.',
  'You look beautiful being yourself.',
  'You make good to feel hard.',
  'You are thoughtful in little ways.',
  'You make life feel warmer.',
  'You are my favorite kind of person.',
  'You make memories worth saving.',
  'You are sunshine with a little things.',
  'You make birthdays feel meaningful.',
  'You are a beautiful chapter.',
  'You make every corner feel like home.',
  'You are cute person for us.',
  'You have the prettiest heart.',
  'You make people feel noticed.',
  'You bring sparkle into simple things.',
  'You are always presious to us.',
  'You make every story better.',
  'You are someone I am grateful.',
  'You make emotions feel safe.',
  'You have a rare kind of grace.',
  'You make the day softer.',
  'You are a forever kind of sis to me.',
  'You make everyone around you happier.',
  'You are the golden-hour energy.',
  'You make small surprises feel huge.',
  'You are beautifully dramatic sometimes.',
  'You make life feel like a cute vlog.',
  'You are my fav memory keeper.',
  'You make even chaos look pretty.',
  'You are special in every season.',
  'You make me proud to know you.',
  'You carry love in your details.',
  'You make every laugh feel louder.',
  'You are a little universe of warmth.',
  'You make everything feel less lonely.',
  'You are rare, real, and radiant.',
  'You make wishes feel possible.',
  'You are the prettiest comfort zone.',
  'You make every message feel sweet.',
  'You turn moments into keepsakes.',
  'You are always worth celebrating.',
  'You make kindness look beautiful.',
  'You are a blessing in soft colors.',
  'You make every page of life prettier.',
  'You are the one i belived always.',
  'You made me smile sometimes.',
  'You deserve all the magic.',
  'You make today feel golden.',
  'You are unforgettable.',
  'You are my fav thangima from another mom.',
  'You are my fav more than 100 reasons can say.'
];

const reasonGrid = $('#reasonGrid');
if (reasonGrid) {
  const imageFolder = reasonGrid.dataset.imageFolder || 'assets';
  const reasonImages = Array.from({ length: 100 }, (_, index) => `${imageFolder}/${index + 1}.jpg`);

  reasonGrid.innerHTML = reasons
    .map((reason, index) => {
      const image = reasonImages[index % reasonImages.length];
      return `
      <article class="reason-card reveal" tabindex="0">
        <div class="reason-inner">
          <div class="reason-front">
            <h3>${index + 1}</h3>
            <p>♡tap to see note♡</p>
          </div>
          <div class="reason-back" style="background-image: linear-gradient(to bottom, rgba(62,50,50,.08), rgba(62,50,50,.18) 45%, rgba(62,50,50,.78)), url('${image}');">
            <p>${reason}</p>
          </div>
        </div>
      </article>`;
    })
    .join('');
}

$('#randomReasonBtn')?.addEventListener('click', () => {
  $('#randomReason').textContent = reasons[Math.floor(Math.random() * reasons.length)];
});

const envelope = $('#envelope');
const letterText = `Dear Thangimaa,🫶🏻💗
You know what’s beautiful? Sometimes life brings people into our lives who aren’t related to us by blood, but somehow become family to our hearts. And for me, you are one special Person.🥹❤️
Even though we’re miles apart, I hope you know that distance can never make you any less special to me. We may not always be together to share random laughs, silly conversations, little secrets, or those crazy moments, but you still have your own beautiful place in my heart. Some bonds don’t need the same home, the same city, or even daily conversations to feel real. Ours is one of them.🫂✨
Happy Birthday to my sweetest Thangimaa🎂🎀 Today is your day, so please smile a little extra, laugh a little louder, eat your favourite food, take a hundred of cute pictures, and enjoy every little moment. And please remember, you’re getting older, but don’t even think about becoming less dramatic😂💗
Jokes apart, I genuinely wish you a life full of happiness, peaceful days, beautiful surprises, big achievements, and people who love you for exactly who you are. I hope every dream you're quietly holding in your heart comes true, and whenever life gets difficult, you find enough strength to keep going and enough reasons to smile again.🌷🤍
Sometimes I wish distance wasn't a thing, just so I could be there to celebrate your birthday, annoy you in person, laugh at the most random things, and make some unforgettable memories with you. But until those moments happen, consider this little message a warm wishes from miles away.🫂💌
And one thing rah, no matter how far apart we are, you can always count on me for random talks, stupid jokes, emotional support, and a little bit of nonsense whenever you need it.😂🫶🏻 You don't have to be okay all the time, and you never have to pretend to be someone else around me. Just be you, because the person you are is already so special.
I'm genuinely grateful that life brought you into mine. We might not share the same blood, but I'm happy we get to share a bond that feels like family. And honestly, that's something beautiful in its own way.🥹❤️
"Happy Birthday once again, my favourite Thangimaa🎂💗"
Keep smiling, keep shining, keep being your adorable, crazy self, and never forget how much you mean to the people who care about you. May this new chapter bring you more happiness than you expect, more memories than you can count, and more reasons to say, *“Life is actually beautiful.”* 🌈✨
Miles apart, but always connected by heart. Until we meet, sending you the biggest virtual hug and all the love in the world.🫂💖
Lots of love, always and forever. We love you, Thangimaa🫶🏻🎀💗
`;
let hasTypedLetter = false;

envelope?.addEventListener('click', () => {
  envelope.classList.add('open');
  if (hasTypedLetter) return;

  hasTypedLetter = true;
  let index = 0;
  const typedLetter = $('#typedLetter');
  const typing = setInterval(() => {
    typedLetter.textContent += letterText[index] || '';
    index += 1;
    if (index > letterText.length) clearInterval(typing);
  }, 35);
});

const cake = $('#birthdayCake') || $('.cake');
const cutCakeBtn = $('.cut-cake-btn');
const cakeStageText = $('#cakeStageText');
let cakeAnimationStarted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

cutCakeBtn?.addEventListener('click', async () => {
  if (!cake || cakeAnimationStarted) return;

  cakeAnimationStarted = true;
  cutCakeBtn.disabled = true;

  cakeStageText.textContent = 'blowing the candles... 🌬️';
  cutCakeBtn.textContent = 'Blowing Candles...';
  cake.classList.add('blow');
  await wait(1500);

  cakeStageText.textContent = ' cake is cutting 🔪';
  cutCakeBtn.textContent = '';
  cake.classList.add('knife-in');
  await wait(1200);

  cakeStageText.textContent = ' into a slice... 🍰';
  cutCakeBtn.textContent = 'Cutting Slice...';
  cake.classList.add('sliced');
  await wait(900);

  cakeStageText.textContent = 'first slice for Dad and Mom 🎉';
  cutCakeBtn.textContent = 'Cake Cut 🎉';

  if (typeof confetti === 'function') {
    confetti({ particleCount: 280, spread: 115, origin: { y: 0.62 } });
  }
});


  