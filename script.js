
const stories = [
  // English Story 1
  {
    category: "LIFE & GROWTH",
    title: "You don't have to have it all figured out.",
    paragraphs: [
      "Somewhere along the way, we started believing that life should come with a plan. By a certain age, we think we should know who we are and where we are going.",
      "But life rarely follows a straight line. Sometimes plans change. Sometimes we take the long way around. And sometimes, we simply need to pause and breathe.",
      "You are allowed to be a work in progress. You are allowed to change your mind, start over, and discover new things about yourself.",
      "You don't need all the answers today. Take the next small step and remember that becoming takes time."
    ]
  },

  // English Story 2
  {
    category: "MIND & HEALING",
    title: "Give yourself the kindness you give everyone else.",
    paragraphs: [
      "Think about how gently you speak to someone you love when they make a mistake. You remind them that one bad day doesn't define them.",
      "Now think about how you speak to yourself. Are you just as patient when things go wrong, or do you become your own harshest critic?",
      "You deserve the same understanding you offer to other people. Rest when you need to. Forgive yourself for what you didn't know before.",
      "You don't have to earn kindness by being perfect. You deserve it simply because you are human."
    ]
  },

  // English Story 3
  {
    category: "RELATIONSHIPS",
    title: "The people who make life feel a little softer.",
    paragraphs: [
      "Some people make life feel lighter without even trying. They listen when you speak, remember the little things, and make ordinary moments feel special.",
      "They don't always have the right advice. Sometimes they simply sit beside you, let you talk, or share a laugh when you need one most.",
      "As life gets busy, make room for the people who make you feel safe to be yourself. Tell them you appreciate them.",
      "Often, the best parts of life are the small, quiet ways we remind each other: you matter, and you don't have to do everything alone."
    ]
  },

  // Hindi Story 1
  {
    category: "ज़िंदगी की सीख",
    title: "हर सुबह एक नया मौका है।",
    paragraphs: [
      "कभी-कभी ज़िंदगी में ऐसा वक्त आता है जब लगता है कि सब कुछ पीछे छूट गया। कुछ सपने अधूरे रह जाते हैं और कुछ फैसलों का पछतावा मन में रह जाता है।",
      "लेकिन ज़िंदगी हमें हर दिन एक नई सुबह देती है। इसका मतलब यह नहीं कि पुराना सब कुछ भूल जाओ, बल्कि यह कि पुरानी गलतियों से सीखकर आगे बढ़ो।",
      "हो सकता है आज तुम्हारी मंज़िल दूर हो, लेकिन तुम्हारा एक छोटा-सा कदम भी तुम्हें उसके करीब ले जा सकता है।",
      "याद रखना, तुम्हारी कहानी अभी खत्म नहीं हुई है। कल जैसा भी था, आज फिर से शुरुआत करने का मौका है।"
    ]
  },

  // Hindi Story 2
  {
    category: "खुद से प्यार",
    title: "खुद के लिए भी थोड़ा जीना सीखो।",
    paragraphs: [
      "तुम सबकी बातें सुनते हो, सबकी परेशानियों में साथ देते हो और सबको खुश रखने की कोशिश करते हो। लेकिन कभी खुद से भी पूछो कि तुम सच में कैसे हो?",
      "दूसरों की मदद करना अच्छी बात है, पर अपनी खुशियों और जरूरतों को हमेशा पीछे रखना जरूरी नहीं है।",
      "कभी अपने पसंदीदा काम के लिए वक्त निकालो, बिना किसी अपराधबोध के आराम करो और अपनी छोटी-छोटी जीत का जश्न मनाओ।",
      "तुम्हारी जिंदगी में तुम्हारी भी जगह होनी चाहिए। खुद का ख्याल रखना स्वार्थ नहीं, बल्कि खुद के प्रति जिम्मेदारी है।"
    ]
  },

  // Hindi Story 3
  {
    category: "रिश्ते",
    title: "कुछ रिश्ते सुकून बनकर आते हैं।",
    paragraphs: [
      "ज़िंदगी में कुछ लोग ऐसे मिलते हैं जिनके सामने हर वक्त मजबूत बने रहने का दिखावा नहीं करना पड़ता। उनके सामने तुम अपनी परेशानी भी बता सकते हो और अपनी खामोशी भी साझा कर सकते हो।",
      "ऐसे रिश्ते हमेशा बड़े-बड़े वादों से नहीं बनते। कभी एक छोटा-सा हाल पूछना, मुश्किल वक्त में साथ देना या बिना टोके सुन लेना ही काफी होता है।",
      "जो लोग तुम्हें समझने की कोशिश करते हैं, तुम्हारी इज्जत करते हैं और तुम्हें खुद जैसा रहने देते हैं, उनकी कद्र करना।",
      "क्योंकि कभी-कभी जिंदगी की सबसे खूबसूरत बात कोई बड़ी कामयाबी नहीं, बल्कि वह सुकून होता है जो किसी अपने के साथ महसूस होता है।"
    ]
  }
];

// Category filter
const categoryButtons = document.querySelectorAll(".category-btn");
const storyCards = document.querySelectorAll(".story-card");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.category;

    categoryButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    storyCards.forEach((card) => {
      const matches =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.hidden = !matches;
    });
  });
});

// Story popup elements
const modal = document.getElementById("story-modal");
const closeModalButton = document.getElementById("close-modal");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

// Open complete story
function openStory(index) {
  const story = stories[index];

  if (!story || !modal) return;

  modalCategory.textContent = story.category;
  modalTitle.textContent = story.title;
  modalBody.replaceChildren();

  story.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    modalBody.appendChild(p);
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  closeModalButton?.focus();
}

// Close story popup
function closeStory() {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

// Connect all six story buttons
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.article);
    openStory(index);
  });
});

closeModalButton?.addEventListener("click", closeStory);

// Close popup by clicking outside
modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeStory();
  }
});

// Close popup using Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeStory();
  }
});

// Newsletter demo — does not send or save emails
const newsletterForm = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("form-message");

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput || !emailInput.checkValidity()) {
    emailInput?.reportValidity();
    return;
  }

  if (formMessage) {
    formMessage.textContent =
  "Thank you for subscribing! ♡";
  }

  newsletterForm.reset();
});
