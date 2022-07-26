const fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) throw `Masukkan teks,contoh ${usedPrefix + command} Maru`
  try {
    let res = `https://api-kimimaru-v2.herokuapp.com/api/textpro/${command}?apikey=k1mimaru&text=${text}`
  conn.sendButtonImg(m.chat, res, `Done`, wm, "Menu", ".menu", m)
  } catch(e){
    m.reply(`Server sedang error,coba lah lain kali!`)
  }
}
handler.help = ["1917 <text>", "abstra <text>", "american <text>", "advanced <text>", "balloon1 <text>", "balloon2 <text>", "balloon3 <text>", "balloon4 <text>", "balloon5 <text>", "balloon6 <text>", "balloon7 <text>", "bear <text>", "blackpink <text>", "biscuit <text>", "bagel <text>", "box <text>", "bokeh <text>", "blood <text>", "blood2 <text>", "bread <text>", "berry <text>", "brokenglass <text>", "captainamerika <text>", "chrome <text>", "carbon <text>", "candy <text>", "cake <text>", "circuit <text>", "christmas <text>", "denim <text>", "deluxe <text>", "deluxe2 <text>", "decorate <text>", "decorate2 <text>", "decorativeglass <text>", "dropwater <text>", "embossed <text>", "firework <text>", "equalizer <text>", "glossy <text>", "glossy2 <text>", "glossy3 <text>", "graffiti <text>", "gradient <text>", "gradient2 <text>", "glitch <text>", "glitter <text>", "glitter2 <text>", "glitter3 <text>", "glitter4 <text>", "glitter5 <text>", "glitter6 <text>", "glitter7 <text>", "gem1 <text>", "gem2 <text>", "glue <text>", "glass1 <text>", "glass2 <text>", "glass3 <text>", "glass4 <text>", "glass5 <text>", "glass6 <text>", "glass7 <text>", "glass8 <text>", "glass9 <text>", "gloss <text>", "hexa <text>", "halloween <text>", "halloween2 <text>", "halloween3 <text>", "horror <text>", "horror2 <text>", "harrypotter <text>", "holographic <text>", "honey <text>", "ice <text>", "jewelry1 <text>", "jewelry2 <text>", "jewelry3 <text>", "jewelry4 <text>", "jewelry5 <text>", "jewelry6 <text>", "jewelry7 <text>", "jewelry8 <text>", "jewelry9 <text>", "jewelry10 <text>", "jewelry11 <text>", "jewelry12 <text>", "jewelry13 <text>", "jewelry14 <text>", "jewelry15 <text>", "joker <text>", "juice <text>", "koi <text>", "leaves <text>", "luxury <text>", "lava <text>", "magma <text>", "metallic <text>", "metal1 <text>", "metal2 <text>", "metal3 <text>", "metal4 <text>", "metal5 <text>", "metal6 <text>", "metal7 <text>", "metal8 <text>", "metal9 <text>", "marble <text>", "marble2 <text>", "minion <text>", "matrix <text>", "neon1 <text>", "neon2 <text>", "neon3 <text>", "neon4 <text>", "neon5 <text>", "neon6 <text>", "neon7 <text>", "pipe <text>", "papercut1 <text>", "papercut2 <text>", "fabric <text>", "plastic <text>", "rock <text>", "rainbow <text>", "robot <text>", "rusty <text>", "sci-fi <text>", "sci-fi2 <text>", "space <text>", "sketch <text>", "science <text>", "stone1 <text>", "stone2 <text>", "shiny <text>", "strawberry <text>", "skeleton <text>", "steel <text>", "sand1 <text>", "sand2 <text>", "sand3 <text>", "sand4 <text>", "snow <text>", "thunder <text>", "thunder2 <text>", "transformer <text>", "technology <text>", "toxic <text>", "underwater <text>", "wicker <text>", "watercolor <text>", "wood <text>", "warning <text>", "wall <text>", "xmas <text>"]
handler.tags = ['textpro']
handler.command = /^(1917|abstra|american|advanced|balloon1|balloon2|balloon3|balloon4|balloon5|balloon6|balloon7|bear|blackpink|biscuit|bagel|box|bokeh|blood|blood2|bread|berry|brokenglass|captainamerika|chrome|carbon|candy|cake|circuit|christmas|denim|deluxe|deluxe2|decorate|decorate2|decorativeglass|dropwater|embossed|firework|equalizer|glossy|glossy2|glossy3|graffiti|gradient|gradient2|glitch|glitter|glitter2|glitter3|glitter4|glitter5|glitter6|glitter7|gem1|gem2|glue|glass1|glass2|glass3|glass4|glass5|glass6|glass7|glass8|glass9|gloss|hexa|halloween|halloween2|halloween3|horror|horror2|harrypotter|holographic|honey|ice|jewelry1|jewelry2|jewelry3|jewelry4|jewelry5|jewelry6|jewelry7|jewelry8|jewelry9|jewelry10|jewelry11|jewelry12|jewelry13|jewelry14|jewelry15|joker|juice|koi|leaves|luxury|lava|magma|metallic|metal1|metal2|metal3|metal4|metal5|metal6|metal7|metal8|metal9|marble|marble2|minion|matrix|neon1|neon2|neon3|neon4|neon5|neon6|neon7|pipe|papercut1|papercut2|fabric|plastic|rock|rainbow|robot|rusty|sci-fi|sci-fi2|space|sketch|science|stone1|stone2|shiny|strawberry|skeleton|steel|sand1|sand2|sand3|sand4|snow|thunder|thunder2|transformer|technology|toxic|underwater|wicker|watercolor|wood|warning|wall|xmas)$/i
handler.limit = true
//Creator : M.Jamil
module.exports = handler
