const blockedDomains = [
    // Major AI Chatbots & Assistants
    "chatgpt.com", "openai.com", "claude.ai", "anthropic.com",
    "gemini.google.com", "bard.google.com", "perplexity.ai",
    "copilot.microsoft.com", "bing.com/chat", "meta.ai", "llama.com",
    "deepseek.com", "chat.deepseek.com", "kimi.ai", "moonshot.cn",
    "doubao.com", "bytechat.com", "qianwen.aliyun.com", "tongyi.aliyun.com",
    "ernie.baidu.com", "yiyan.baidu.com", "sparkdesk.xunfei.cn",
    "xinghuo.xunfei.cn", "zhipuai.cn", "chatglm.cn", "minimax.ai",
    "hailuo.ai", "stepchat.com", "sensetime.com", "sensetime.ai",
    "iflytek.com", "iflyrec.com", "baichuan-ai.com", "baichuan.ai",
    "01.ai", "yi.ai", "lingyiwanwu.com", "inflection.ai", "pi.ai",
    "character.ai", "c.ai", "poe.com", "quora.com/poe",
    
    // AI Writing & Content Generation
    "jasper.ai", "copy.ai", "writesonic.com", "rytr.me",
    "quillbot.com", "grammarly.com", "languagetool.org",
    "deepl.com", "translate.google.com", "wordtune.com",
    "simplified.com", "anyword.com", "copysmith.ai",
    "copymatic.ai", "contentbot.ai", "scalenut.com",
    "frase.io", "outranking.io", "surfer.ai", "marketmuse.com",
    "clearscope.io", "inkforall.com", "growthbar.com",
    
    // AI Image Generation
    "midjourney.com", "stability.ai", "dreamstudio.ai",
    "leonardo.ai", "playgroundai.com", "ideogram.ai",
    "mage.space", "clipdrop.co", "getimg.ai", "seaart.ai",
    "tensor.art", "civitai.com", "huggingface.co/spaces",
    "replicate.com", "firefly.adobe.com", "adobe.com/firefly",
    "canva.com", "canva.ai", "designs.ai", "vista.create.com",
    "nightcafe.studio", "starryai.com", "wombo.art",
    "neural.love", "picsart.com/ai", "fotor.com/ai",
    "hotpot.ai", "pixlr.com/ai", "befunky.com/ai",
    
    // AI Video & Animation
    "runwayml.com", "pika.art", "pikalabs.ai", "sora.openai.com",
    "haiper.ai", "capcut.com", "clipchamp.com", "veed.io",
    "synthesia.io", "heyen.com", "d-id.com", "elai.io",
    "colossyan.com", "pictory.ai", "invideo.io/ai",
    "fliki.ai", "lumen5.com", "rawshorts.com", "animoto.com",
    "wave.video", "typestudio.co", "descript.com", "screen.studio",
    
    // AI Audio & Voice
    "elevenlabs.io", "elevenlabs.com", "resemble.ai",
    "wellsaid.com", "play.ht", "murf.ai", "listnr.ai",
    "lovo.ai", "speechify.com", "naturalreaders.com",
    "voicemaker.in", "ttsfree.com", "azure.microsoft.com/cognitive-services",
    "aws.amazon.com/polly", "google.cloud/text-to-speech",
    "ibm.com/watson/text-to-speech", "soundraw.io", "boomy.com",
    "aiva.ai", "mubert.com", "beatoven.ai", "songr.ai",
    
    // AI Code Assistants
    "github.com/copilot", "copilot.github.com", "cursor.sh",
    "codeium.com", "tabnine.com", "replit.com", "replit.ai",
    "v0.dev", "vercel.ai", "codesquire.ai", "mutable.ai",
    "debuild.co", "gptengineer.app", "smol.ai", "aide.dev",
    "phind.com", "you.com/code", "sourcegraph.com/cody",
    "amazon.com/codewhisperer", "aws.amazon.com/codewhisperer",
    "codecomplete.ai", "whattheai.tech", "blackbox.ai",
    
    // AI Productivity & Office
    "notion.so", "notion.ai", "microsoft.com/microsoft-365/copilot",
    "office.com/copilot", "google.com/workspace/duet",
    "duet.ai", "slidesgo.com/ai", "beautiful.ai",
    "gamma.app", "tome.app", "pitch.com", "deckset.com",
    "simondata.com", "kroma.ai", "mem.ai", "otter.ai",
    "fireflies.ai", "fathom.video", "tldv.io", "read.ai",
    "sembly.ai", "airgram.io", "fireflies.ai", "avoma.com",
    "gong.io", "chrous.ai", "insightly.com", "salesforce.com/einstein",
    
    // AI Research & Knowledge
    "elicit.com", "elicit.org", "scite.ai", "consensus.app",
    "connectedpapers.com", "researchrabbitapp.com",
    "iris.ai", "yewno.com", "knewton.com", "cram.com",
    "quizlet.com", "brainscape.com", "ankiweb.net",
    "wolframalpha.com", "symbolab.com", "mathpapa.com",
    "chegg.com", "coursehero.com", "studocu.com",
    "khanacademy.org", "brilliant.org", "coursera.org",
    "udemy.com", "edx.org", "futurelearn.com",
    
    // AI Business & Analytics
    "tableau.com", "powerbi.microsoft.com", "looker.com",
    "thoughtspot.com", "sisense.com", "domo.com",
    "qlick.com", "microstrategy.com", "tibco.com",
    "alteryx.com", "dataiku.com", "h2o.ai", "databricks.com",
    "snowflake.com", "aws.amazon.com/sagemaker",
    "google.cloud/ai-platform", "azure.microsoft.com/machine-learning",
    
    // AI Automation & Workflow
    "zapier.com", "make.com", "integromat.com", "n8n.io",
    "tray.io", "workato.com", "automate.io", "pipedream.com",
    "retool.com", "bubble.io", "adalo.com", "flutterflow.io",
    "brave.com/leo", "opera.com/aria", "duckduckgo.com/ai-chat",
    "kagi.com", "you.com", "bing.com/chat", "baidu.com/chat",
    
    // AI Development Platforms
    "huggingface.co", "replicate.com", "together.ai",
    "anyscale.com", "octo.ai", "forefront.ai", "nat.dev",
    "lmsys.org", "chat.lmsys.org", "open-assistant.io",
    "cohere.com", "ai21.com", "writer.com", "mosaicml.com",
    "sambanova.ai", "cerebras.ai", "graphcore.ai",
    "groq.com", "lambda.ai", "coresite.com",
    
    // AI Data & Labeling
    "scale.com", "labelbox.com", "superb-ai.com",
    "snorkel.ai", "appen.com", "clickworker.com",
    "mturk.com", "figure-eight.com", "hive.ai",
    "clarifai.com", "landing.ai", "neurala.com",
    
    // Emerging AI & Specialized
    "adept.ai", "actor.space", "multi.ai", "reclaim.ai",
    "motion.ai", "taskade.com", "clickup.com", "asana.com",
    "trello.com", "monday.com", "airtable.com",
    "coda.io", "roamresearch.com", "obsidian.md",
    "logseq.com", "remnote.com", "reflect.app",
    
    // AI Communication & Customer Service
    "intercom.com", "zendesk.com", "crisp.chat",
    "drift.com", "liveperson.com", "bold360ai.com",
    "ada.cx", "yellow.ai", "haptik.ai", "verloop.io",
    "ultimate.ai", "forethought.ai", "asapp.com",
    "replicant.ai", "poly.ai", "uniphore.com",
    
    // AI Search & Discovery
    "perplexity.ai", "phind.com", "you.com",
    "kagi.com", "neeva.com", "andisearch.com",
    "metaphor.systems", "exa.ai", "consensus.app",
    "elicit.org", "scite.ai", "connectedpapers.com",
    
    // AI Legal & Compliance
    "casetext.com", "harvey.ai", "spellbook.legal",
    "ironclad.com", "lawgeex.com", "lexisnexis.com",
    "westlaw.com", "vlex.com", "rossintelligence.com",
    
    // AI Healthcare & Medical
    "viz.ai", "aidoc.com", "butterflynetwork.com",
    "pathai.com", "tempus.com", "flatiron.com",
    "grail.com", "freenome.com", "guardanthealth.com",
    "zebra-med.com", "arterys.com", "enlitic.com",
    
    // AI Finance & Trading
    "kensho.com", "sentient.io", "alpaca.markets",
    "quantconnect.com", "tradingview.com/pine",
    "numer.ai", "c3.ai", "prowler.io", "favr.ai",
    "aiden.ai", "tractable.ai", "shift-technology.com"
];

const rules = blockedDomains.map((domain, index) => ({
  id: index + 1,
  priority: 1,
  action: {
    type: "redirect",
    redirect: { extensionPath: "/blocked.html" }
  },
  condition: {
    urlFilter: `||${domain}`,
    resourceTypes: ["main_frame"]
  }
}));

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: rules.map(r => r.id),
  addRules: rules
});

