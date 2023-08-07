/**
 * StylerJS
 * @author Anurag Deep
 * @web https://anuragdeep.com
 * @readonly
 */

var TEXT_SOURCE = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

var fonts_arr = [
  //0
  '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ',
  //1
  '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅',
  //2
  '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩',
  //3
  '𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵',
  //4
  '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ',
  //5
  'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ',
  //6
  'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘϙʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘϙʀsᴛᴜᴠᴡxʏᴢ',
  //6
  '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙',
  //7
  '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡',
  //8
  '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕',
  //9
  '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉',
  //10
  'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ',
  //11
  'Z⅄XMΛ∩⊥SᴚΌԀONW˥⋊ſIH⅁ℲƎᗡƆᙠ∀zʎxʍʌnʇsɹbdouɯlʞɾıɥɓɟǝpɔqɐ', ////TODO, Fan!
  //12
  'ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ',
  //13
  'ąҍçժҽƒցհìʝҟӀʍղօքզɾʂէմѵա×վՀȺβ↻ᎠƐƑƓǶįلҠꝈⱮហටφҨའϚͲԱỼచჯӋɀ',
  //14
  '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉',
  //15
  'ค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊ',
  //16
  'ąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑ',
  //17
  '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉',
  //18
  'ค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչ',
  //19
  'αႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥαႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥ',
  //20
  //822'a̶b̶c̶d̶e̶f̶g̶h̶i̶j̶k̶l̶m̶n̶o̶p̶q̶r̶s̶t̶u̶v̶w̶x̶y̶z̶A̶B̶C̶D̶E̶F̶G̶H̶I̶J̶K̶L̶M̶N̶O̶P̶Q̶R̶S̶T̶U̶V̶W̶X̶Y̶Z̶',
  //823'a̷b̷c̷d̷e̷f̷g̷h̷i̷j̷k̷l̷m̷n̷o̷p̷q̷r̷s̷t̷u̷v̷w̷x̷y̷z̷A̷B̷C̷D̷E̷F̷G̷H̷I̷J̷K̷L̷M̷N̷O̷P̷Q̷R̷S̷T̷U̷V̷W̷X̷Y̷Z̷',
  //818'a̲b̲c̲d̲e̲f̲g̲h̲i̲j̲k̲l̲m̲n̲o̲p̲q̲r̲s̲t̲u̲v̲w̲x̲y̲z̲A̲B̲C̲D̲E̲F̲G̲H̲I̲J̲K̲L̲M̲N̲O̲P̲Q̲R̲S̲T̲U̲V̲W̲X̲Y̲Z̲',
  //819'a̳b̳c̳d̳e̳f̳g̳h̳i̳j̳k̳l̳m̳n̳o̳p̳q̳r̳s̳t̳u̳v̳w̳x̳y̳z̳A̳B̳C̳D̳E̳F̳G̳H̳I̳J̳K̳L̳M̳N̳O̳P̳Q̳R̳S̳T̳U̳V̳W̳X̳Y̳Z̳',
  //822'a̶̢̐͊̿̈͗͠b̴̥̠̩͆͗̂̓́̂c̶̢̢͓̖̻̪̯̠̣͂̆̏̆́̅͝ḍ̸͉̝̾͒̿͘e̸̙̞̜̒̀̒̆̈́͊ͅͅf̸̨̱̻͕̉g̶̱̹̝͠h̵̥̳̜̻͙́͘ȉ̴̺͍̭̻͈̑ͅj̷̢̢̛̻͚͈̫̪͍̙͚̍͆̓͑̽̓ķ̴̢̛̳̦̂̂͊̅ḷ̸̰͋̆̿̇̕̕͝m̵̢̡̼͔̮̬̖̖̘͑͂̋̊̇͗̋͊̎n̵̬̙̠̝̞̖͈̟̲̓́̓̄̐̒͆͘͠͠ͅọ̷͙̪̜̈́̐̽͂̆̂͝͠p̸̘̼̼̫̫͉̯͒͒̏̍͗̓̆̄q̷͍̟̥̯͕̪͇͐̊͜r̵̢͚̱̟̙̻͕̙͍͙̿͊̎́͝ş̸͖̻̳̰̠͕̜͕͇͒̉̂͂t̵̨̟̦̯͚̰͈͙̐́̈́̀͘͜ṳ̵̡̣̠͔̿͗v̷̡͇͎͈̝̻̟̥͇̾̌̽̈́̏̂̆̚͠ẅ̷̹̺̤̞̣͙̣̥̭́͂͆͒ͅx̴̩̫̱̮̭̟͈͚͛̾́̐͛̕͝ͅẙ̸̧̮͇͇̗̟́͊͂̀̉̚ͅz̸̨͈̠̩̐͒̉̿̈̚͝Ḁ̴̜͔̈́̍̓̀B̶͖̠͕͎̮̹̞̜̪͔͑͑̔͊͠C̴̨̨͖̞͕̰͚̫̻͗͗͆͠͝D̴̗͝E̵̙͔̥̯͎̪͚͌̚F̶̢̪̜̰̟̳͓͎͎̋͌̋̊̈́̕͠G̶̗̙̲̹͕̬͖̠͆̅͝ͅH̶̙̥͕͍̀̍̈̐̉͂͛͂Ĭ̸̧̯̽̓J̸̹̣̽̌̀̆͑͋͝͝Ķ̴̛̟́͗̚͘͝L̷̖͕̦̦͎̼̗͉͈͔̐Ḿ̷͈̳̘̳̝̉̍̌͑͝N̴̯̞̐̒̄̐͒̌̇̚͝͝Ǫ̶̛̖͈̱̘̖̃̀̾̈́͝͝͝P̴̧̭̥̘̘͎͚̌͋̂̈́͋̒̏͂͜Q̷̟̰̑͌͘R̸̫̻̱̦̎̑̐S̷̨̡͇͖̥̺̿̌̔͘T̶̙͓̭̰͉̏̒͝Ū̸̪̗̠̘̰̣̞͍̱͂̑͌̽̽̚̚V̴̨̥̳̭̪̰̙̞̇W̶̯̲̭̹̪̭͌̎͂̅̑̈́̚X̷̨͎̬͖̼̹̗̀͗̈́͋͜͝Y̷͔͇̻̊̍͒̋͒̅̒͝Z̸̧̯̖̓̍͊̆̐̿͊',
  //830 'a̾b̾c̾d̾e̾f̾g̾h̾i̾j̾k̾l̾m̾n̾o̾p̾q̾r̾s̾t̾u̾v̾w̾x̾y̾z̾A̾B̾C̾D̾E̾F̾G̾H̾I̾J̾K̾L̾M̾N̾O̾P̾Q̾R̾S̾T̾U̾V̾W̾X̾Y̾Z̾',
  // 846 'a͎b͎c͎d͎e͎f͎g͎h͎i͎j͎k͎l͎m͎n͎o͎p͎q͎r͎s͎t͎u͎v͎w͎x͎y͎z͎A͎B͎C͎D͎E͎F͎G͎H͎I͎J͎K͎L͎M͎N͎O͎P͎Q͎R͎S͎T͎U͎V͎W͎X͎Y͎Z͎',
  // 829 'a͓̽b͓̽c͓̽d͓̽e͓̽f͓̽g͓̽h͓̽i͓̽j͓̽k͓̽l͓̽m͓̽n͓̽o͓̽p͓̽q͓̽r͓̽s͓̽t͓̽u͓̽v͓̽w͓̽x͓̽y͓̽z͓̽A͓̽B͓̽C͓̽D͓̽E͓̽F͓̽G͓̽H͓̽I͓̽J͓̽K͓̽L͓̽M͓̽N͓̽O͓̽P͓̽Q͓̽R͓̽S͓̽T͓̽U͓̽V͓̽W͓̽X͓̽Y͓̽Z͓̽'
]

// $('#src')
//   .change(updateText(1))
//   .on('keyup input propertychange paste contextmenu', updateText(1))
// let styleNumber = 1;

$(document).ready(function () {
  $.each(fonts_arr, function (index, value) {
    if (index) {
      $('.stylish_fonts').append(
        '<div class=""> <label class="btn-primary btn" style="margin: 5px; background-color: white; color: black; border: none;"> <input value="' +
          index +
          '" class="radio border-slate-800 border-2 border-solid bg-slate-300 checked:bg-green-500" style="margin-right: 5px;" type="radio" name="fontStyle" id="id' +
          index +
          '" autocomplete="off" > "' +
          value +
          '"  </label> </div>',
      )
    } else {
      $('.stylish_fonts').append(
        '<div class=""> <label class="btn btn-primary" style="margin: 5px; background-color: white; color: black; border: none;"> <input checked value="' +
          index +
          '" class="radio border-slate-800 border-2 border-solid bg-slate-300 checked:bg-green-500" style="margin-right: 5px;" type="radio" name="fontStyle" id="id' +
          index +
          '" autocomplete="off" > "' +
          value +
          '"  </label> </div>',
      )
    }
  })

  $('input[type=radio][name=fontStyle]').change(function (ev) {
    ev.preventDefault()

    styleNumber = $(this).attr('value')

    updateText(styleNumber)
  })
})


let styleNumber

styleNumber = $('input[name="fontStyle"]:checked').val()

if (styleNumber == null) {
  styleNumber = 0
}

$('#src').on('keyup input propertychange paste contextmenu', function (ev) {
  ev.preventDefault()
  updateText(styleNumber)
})

resetOutput()
function resetOutput() {
  $('#output').text("𝔗𝔥𝔦𝔰 𝔦𝔰 𝔰𝔱𝔶𝔩𝔦𝔰𝔥 𝔱𝔢𝔵𝔱")
}

function updateText(styleNumber) {
  var src_text = $('#src').val()
  if (src_text == '') {
    $('#output').empty()
    resetOutput()
    return
  }
  updatingFinalText(styleNumber)
}

function updatingFinalText(styleNumber) {
  var src_text = $('#src').val()
  $('#output').empty()

  var fancy_font = fonts_arr[styleNumber]
  $('#output').text('')
  $('#output').text(replaceString(src_text, fancy_font))
}

function replaceString(input_text, fancy_text) {
  if (!input_text) {
    return ''
  }

  var source_split_arr = Array.from(TEXT_SOURCE)
  var fancy_split_arr = Array.from(fancy_text)
  var output_text = input_text

  for (var i = 0; i < source_split_arr.length; i++) {
    var normal_char = source_split_arr[i]
    var fancy_char = fancy_split_arr[i]
    output_text = output_text.split(normal_char).join(fancy_char)
  }

  return output_text
}
