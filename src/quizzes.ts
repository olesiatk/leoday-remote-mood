export interface QuizOption {
  label: string;
  response: string;
}

export interface Quiz {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  options: QuizOption[];
}

const quizzes: Quiz[] = [
  {
    id: 'coffee',
    emoji: '☕',
    title: 'Coffee & Mood Meter',
    subtitle: 'Яка сьогодні готовність до продакшену?',
    options: [
      { label: '☕ 1 чашка', response: '⚡ Готовність 100% (ще б кави)' },
      { label: '☕☕ 2 чашки', response: '🚀 Режим ракетного пального!' },
      { label: '☕☕☕ 3+ чашки', response: '🔥 Розгін на максимум!' },
    ],
  },
  {
    id: 'bugs',
    emoji: '🐛',
    title: 'Bug Hunting Mood',
    subtitle: 'Як просувається полювання на баги сьогодні?',
    options: [
      { label: '🔍 Знайдено за 5 хв', response: '🕵️ Шерлок Холмс від коду!' },
      { label: '😤 Досі полюю...', response: '🎯 Це завжди DNS. Або CSS.' },
      { label: '🤷 Само полагодилось', response: '👻 Привид у машині знову за своє!' },
    ],
  },
  {
    id: 'meetings',
    emoji: '📅',
    title: 'Meeting Survival Poll',
    subtitle: 'Скільки в тебе сьогодні мітингів?',
    options: [
      { label: '🎉 Нуль! Вільний день', response: '🏖️ Живу мрією!' },
      { label: '😐 2-3, ще терпимо', response: '🤖 Режим автопілота: увімкнено' },
      { label: '😵 Одна за одною цілий день', response: '🧟 Рятуйте. Або несіть снеки.' },
    ],
  },
  {
    id: 'deploy',
    emoji: '🚀',
    title: 'Deploy Confidence Check',
    subtitle: 'Яка сьогодні впевненість у деплої?',
    options: [
      { label: '💪 На 100%, все протестовано', response: '🦸 Deploy-герой на підході!' },
      { label: '🙏 Тримаю кулаки', response: '🎰 Кидаю кубики в продакшн!' },
      { label: "😬 YOLO, п'ятничний деплой", response: '🔥 Сміливо. Дуже сміливо.' },
    ],
  },
  {
    id: 'wifi',
    emoji: '📶',
    title: 'WiFi Rage Level',
    subtitle: 'Як сьогодні поводиться твій WiFi?',
    options: [
      { label: '⚡ Літає як шалений', response: '🚀 NASA дзвонили, хочуть свій інтернет назад' },
      { label: '🐌 Повільніший за звичайне', response: '📠 Ласкаво просимо у діал-ап 2.0' },
      { label: '💀 Помер. Знову.', response: '🕯️ Вічна пам\'ять продуктивності, 9:00-9:30' },
    ],
  },
  {
    id: 'standup',
    emoji: '🗣️',
    title: 'Standup Energy',
    subtitle: 'Як пройшов сьогоднішній стендап?',
    options: [
      { label: '⚡ Швидко і безболісно', response: '🏃 Залетіти і вилетіти, мов ніндзя' },
      { label: '😴 Увага вимкнулась на середині', response: '💭 «Вчора я... сьогодні я...» *на автоматі*' },
      { label: '📖 Стендап перетворився на роман', response: '📚 Розділ 47: Тікет, який не хоче помирати' },
    ],
  },
  {
    id: 'merge',
    emoji: '🔀',
    title: 'Merge Conflict Mood',
    subtitle: 'Як пройшов твій останній мердж-конфлікт?',
    options: [
      { label: '😎 Конфлікт розрулено як профі', response: '🧙 Статус гіт-чарівника підтверджено' },
      { label: '😰 У поті, але вижити вдалося', response: '🩹 Шрами додають характеру' },
      { label: '🔥 Все горить', response: '🧯 Хтось, викличте `git reset --hard`... обережно' },
    ],
  },
  {
    id: 'review',
    emoji: '🍿',
    title: 'Code Review Mood',
    subtitle: "Як сьогодні проходить рев'ю пул-реквестів?",
    options: [
      { label: '✅ Всюди LGTM', response: '😇 Найдобріший ревьювер на світі' },
      { label: '🧐 Знайдено 47 причіпок', response: '🔬 Крапки з комою тебе бояться' },
      { label: '🙈 Затверджено, не читаючи', response: '🎲 Смілива стратегія, подивимось чи спрацює' },
    ],
  },
  {
    id: 'monday',
    emoji: '🌙',
    title: 'Monday Morning Meter',
    subtitle: 'Як цей понеділок до тебе ставиться?',
    options: [
      { label: '😃 Готовність підкоряти світ', response: '🦾 Сертифікований воїн понеділка' },
      { label: '😑 Тут лише заради зарплати', response: '🤐 Більше нічого й не треба казати.' },
      { label: '😭 Терміново несіть каву', response: '🚨 Червоний код! Доставляємо еспресо!' },
    ],
  },
  {
    id: 'snacks',
    emoji: '🍕',
    title: 'Snack Emergency Level',
    subtitle: 'Яка в тебе ситуація зі снеками?',
    options: [
      { label: '🍎 Здорові й підготовлені', response: '🥇 Чемпіон дорослого життя!' },
      { label: '🍫 Живу на шоколаді', response: '🍫 Збалансоване харчування: шоколад у всіх чотирьох групах' },
      { label: '😱 Шухляда зі снеками порожня', response: '🚨 Терміновий забіг до автомата з їжею' },
    ],
  },
  {
    id: 'sleep',
    emoji: '🛏️',
    title: 'Sleep Debt Tracker',
    subtitle: 'Скільки сну вдалося сьогодні вхопити?',
    options: [
      { label: '😴 Повні 8 годин', response: '🦄 У чат зайшла міфічна істота' },
      { label: '😪 5-6 годин', response: '☕ До зустрічі біля кавомашини' },
      { label: '🧟 Що таке сон?', response: '🧟 Працюю на кофеїні й чистій злості' },
    ],
  },
  {
    id: 'slack',
    emoji: '💬',
    title: 'Slack Notification Panic',
    subtitle: 'Скільки непрочитаних повідомлень у Slack просто зараз?',
    options: [
      { label: '0️⃣ Inbox zero!', response: '🧘 Дзен-майстер комунікацій' },
      { label: '🔴 20+, але не критично', response: '📵 Стратегія "потім розберусь" в дії' },
      { label: '💀 999+, здаюсь', response: '🏳️ Білий прапор піднято офіційно' },
    ],
  },
  {
    id: 'friday',
    emoji: '🎉',
    title: 'Friday Feeling Check',
    subtitle: "П'ятниця. Який настрій?",
    options: [
      { label: '🎊 Вже подумки у вихідних', response: '🏖️ Тіло в офісі, дух — на пляжі' },
      { label: '😌 Спокійно доробляю задачі', response: '🧩 Останні шматочки пазла на місці' },
      { label: '😤 Ще й досі купа роботи', response: "⏳ П'ятниця обіцяла інше" },
    ],
  },
  {
    id: 'sprint',
    emoji: '📋',
    title: 'Sprint Planning Vibes',
    subtitle: 'Як пройшов сьогоднішній sprint planning?',
    options: [
      { label: '🎯 Все чітко заестимейчено', response: '📐 Story points розкладено по поличках' },
      { label: '🤔 Оцінка одного тікета розтягнулась на годину', response: '⏱️ Класика: "а якщо..." х20' },
      { label: '😵 Backlog виявився бездонним', response: '🕳️ Привіт, безкінечний спрінт' },
    ],
  },
  {
    id: 'retro',
    emoji: '🔄',
    title: 'Retro Meeting Mood',
    subtitle: 'Що переважає на сьогоднішньому retro?',
    options: [
      { label: '👍 Здебільшого "well done"', response: '🎈 Командний дух на висоті' },
      { label: '📝 Купа action items', response: '📌 Наступна retro буде про виконання action items з цієї retro' },
      { label: '🤐 Тиша і незручні погляди', response: '🦗 Цвіркуни офіційно приєднались до мітингу' },
    ],
  },
  {
    id: 'oncall',
    emoji: '📟',
    title: 'On-call Night Survival',
    subtitle: 'Як пройшла нічна зміна on-call?',
    options: [
      { label: '😴 Жодного alert, повноцінний сон', response: '🍀 Продакшн сьогодні добрий' },
      { label: '📱 Один alert, швидко пофіксили', response: '🔧 In and out, мов хірург' },
      { label: '🔥 Ціла ніч у PagerDuty', response: '🚑 Кава замість сну, знову' },
    ],
  },
  {
    id: 'vpn',
    emoji: '🔒',
    title: 'VPN Connection Drama',
    subtitle: 'Як сьогодні поводиться VPN?',
    options: [
      { label: '✅ Одразу підключився, диво', response: '🎊 Рідкісний день гармонії з IT' },
      { label: '🔁 Довелось перепідключатись кілька разів', response: '🔄 Ритуальний танець з VPN-клієнтом' },
      { label: '❌ Взагалі не конектиться', response: '📞 Час писати в IT-підтримку. Знову.' },
    ],
  },
  {
    id: 'battery',
    emoji: '🔋',
    title: 'Laptop Battery Anxiety',
    subtitle: 'Скільки заряду лишилось на ноутбуці?',
    options: [
      { label: '🔋 80%+, спокій і впевненість', response: '😌 Жити можна ще годин 5' },
      { label: '🟡 30-50%, десь поруч зарядка', response: '👀 Пошук розетки триває' },
      { label: '🔴 5%, паніка', response: '🏃 Забіг за зарядкою вже розпочато' },
    ],
  },
  {
    id: 'focus',
    emoji: '🎧',
    title: 'Focus Mode Level',
    subtitle: 'Наскільки вдається сьогодні тримати deep focus?',
    options: [
      { label: '🎧 Навушники on, ніхто не зачепить', response: '🧠 Flow-стан активовано' },
      { label: '🔔 Кожні 10 хв хтось відволікає', response: "🐒 Мавп'ячий розум у прямому ефірі" },
      { label: '🤯 Focus, який ми втратили', response: '🎪 Ласкаво просимо в цирк відкритого офісу' },
    ],
  },
  {
    id: 'googling',
    emoji: '🔎',
    title: 'Stack Overflow Rescue Mission',
    subtitle: 'Скільки вкладок Stack Overflow відкрито прямо зараз?',
    options: [
      { label: '1-2, під контролем', response: '📚 Легка розвідка місцевості' },
      { label: '10+, дослідження триває', response: '🕸️ Класичний rabbit hole' },
      { label: '∞ Copy-paste з першого answer', response: '🎰 Ставка зроблена, works on my machine' },
    ],
  },
  {
    id: 'copilot',
    emoji: '🤖',
    title: 'AI Copilot Check-in',
    subtitle: 'Наскільки сьогодні допомагає AI-асистент у коді?',
    options: [
      { label: '✨ Читає думки, ідеально', response: '🔮 Telepathy as a service' },
      { label: '🤷 То влучає, то ні', response: '🎲 50 на 50, як завжди' },
      { label: '🙃 Пропонує повністю видалити файл', response: '💣 Дякую, обійдусь' },
    ],
  },
  {
    id: 'timezone',
    emoji: '🌍',
    title: 'Timezone Puzzle',
    subtitle: 'Скільки таймзон сьогодні довелось сумістити для одного мітингу?',
    options: [
      { label: '🗺️ Одна, всі поруч', response: '🎯 Розкіш, про яку тільки мріяти' },
      { label: '🌐 2-3, звична еквілібристика', response: '🧮 UTC у голові вже вбудований' },
      { label: '🪐 4+, хтось точно о 3 ночі', response: '🌙 Слава команді на іншому боці планети' },
    ],
  },
  {
    id: 'backlog',
    emoji: '🗂️',
    title: 'Backlog Grooming Session',
    subtitle: 'Як почувається бэклог після сьогоднішнього груммінгу?',
    options: [
      { label: '✂️ Прибрано і структуровано', response: '🌳 Марі Кондо пишається' },
      { label: '📈 Виріс замість того, щоб зменшитись', response: '🌱 Бэклог росте швидше за нас' },
      { label: '🕰️ Знайшли тікет 2019 року', response: '🦖 Археологічна знахідка тижня' },
    ],
  },
  {
    id: 'hotfix',
    emoji: '🚨',
    title: 'Friday Hotfix Roulette',
    subtitle: "Чи випустили сьогодні хотфікс у п'ятницю ввечері?",
    options: [
      { label: '🙅 Ні, свята традиція не порушена', response: '🛡️ Вихідні врятовано' },
      { label: '😬 Так, але маленький', response: '🤏 Технічно це ж майже не рахується' },
      { label: '💥 Так, і чекаємо на дзвінки всі вихідні', response: '📟 PagerDuty вже готується' },
    ],
  },
  {
    id: 'homeoffice',
    emoji: '🏠',
    title: 'Home Office Setup Mood',
    subtitle: 'Як сьогодні почувається домашній офіс?',
    options: [
      { label: '🌟 Ідеальний ергономічний сетап', response: '🪑 Продуктивність на рівні meme-стандарту' },
      { label: '🛋️ Робота з дивана, без осуду', response: '🍿 Комфорт понад усе' },
      { label: '📦 Ноутбук на коробці з-під піци', response: '🍕 DIY-сетап у найкращих традиціях' },
    ],
  },
  {
    id: 'rubberduck',
    emoji: '🦆',
    title: 'Rubber Duck Debugging',
    subtitle: 'Наскільки продуктивною була розмова з гумовою качечкою сьогодні?',
    options: [
      { label: '🦆 Баг вирішився на третьому реченні', response: '🧠 Качечка розумніша за Stack Overflow' },
      { label: '🦆 Пояснення затягнулось на 20 хвилин', response: '📖 Качечка отримала повноцінну лекцію з архітектури' },
      { label: '🦆 Качечка звільнилась психологічно', response: '😶 Навіть гума має межі терпіння' },
    ],
  },
  {
    id: 'naming',
    emoji: '🏷️',
    title: 'Variable Naming Crisis',
    subtitle: 'Як сьогодні минув підбір назви для змінної?',
    options: [
      { label: '✅ Ідеальна назва з першого разу', response: '🏆 Легенда іменування народжена' },
      { label: '🤔 data2, dataNew, dataFinal, dataFinalFinal', response: '📁 Класична еволюція іменування в дії' },
      { label: '🙈 temp залишиться temp назавжди', response: '⏳ Немає нічого постійнішого за тимчасове' },
    ],
  },
  {
    id: 'camera',
    emoji: '📹',
    title: 'Video Call Camera Chaos',
    subtitle: 'Що сталося на відеодзвінку сьогодні?',
    options: [
      { label: '😎 Камера і мікрофон працювали з першого разу', response: '🎬 Голлівудський рівень підготовки' },
      { label: '🐈 Кіт пройшовся по клавіатурі в прямому ефірі', response: '🎤 Новий співдоповідач представлений команді' },
      { label: '🙈 15 хвилин мікрофон був вимкнений', response: '🔇 Класика жанру: "мене чути?"' },
    ],
  },
  {
    id: 'legacycode',
    emoji: '🏺',
    title: 'Legacy Code Archaeology',
    subtitle: 'Що виявилось у сьогоднішньому legacy-коді?',
    options: [
      { label: '📜 Коментар "не чіпай, воно працює"', response: '⚠️ Священний артефакт компанії' },
      { label: '🐘 Функція на 800 рядків без жодного пробілу', response: '🧱 Моноліт у первозданному вигляді' },
      { label: '👽 Код, який уже ніхто не розуміє, навіть автор', response: '🛸 Залишки цивілізації, що зникла' },
    ],
  },
];

export default quizzes;
