const testValues = [
  'abcdef',
  'bababc',
  'abbcde',
  'abcccd',
  'aabcdd',
  'abcdee',
  'ababab'
];

const testMatches = [
  'abcde',
  'fghij',
  'klmno',
  'pqrst',
  'fguij',
  'axcye',
  'wvxyz'
];

const values = [
  'fonbsmjyqugrapsczckghtvdxl',
  'fonpsmjyquwrnpeczikghtvdxw',
  'fonbsmdymuwrapexzikghtvdxl',
  'fonwsmjyquwrapeczikghttdpl',
  'fonbsmjkquwrapeczjkghtvdxx',
  'yonbsmjyquwrapecgikghtvdxc',
  'donbsmjyquqrapeczikghtadxl',
  'monbsmjyquprgpeczikghtvdxl',
  'fonbsmjyquwvapecqgkghtvdxl',
  'fonbsmjyquwrkphczikghsvdxl',
  'fonbomjyeuwvapeczikghtvdxl',
  'fonwsmjyjuwrapoczikghtvdxl',
  'foybsmjyquwcapeczikghsvdxl',
  'fonbsmjyquwrtaeczikgptvdxl',
  'ponbsmpyquwjapeczikghtvdxl',
  'flnbcmjyquwrqpeczikghtvdxl',
  'fonbsmjyquwrapegzikvbtvdxl',
  'fonbjmjyqgwrazeczikghtvdxl',
  'zoabsmjyquwkapeczikghtvdxl',
  'fonbsmjyquwrapecziktxkvdxl',
  'fonbsxjyrpwrapeczikghtvdxl',
  'fonbsmjbquwqapeciikghtvdxl',
  'lonbsmjyquwraphczikghtvdul',
  'ftnbsmjyquwrapcczikghtxdxl',
  'fonbsmjyqgwrapeczikghtldxc',
  'fonbsmjsquwmapeyzikghtvdxl',
  'fonbsmjyqfwrapecziqghtgdxl',
  'yonbsmjyquwraveczikgftvdxl',
  'fovbsmjyquwrapeczikggkvdxl',
  'fonbsmjyquwrapezzikghbvdvl',
  'fonzsmxyquwrapeczukghtvdxl',
  'fonbemjyquwrapevzikghtvrxl',
  'conbsxjxquwrapeczikghtvdxl',
  'fonbsmjsmewrapeczikghtvdxl',
  'folbsmjyqhwrapqczikghtvdxl',
  'fonbsmjyquwrzneczikghtvdxn',
  'fonbsmjyquirapeczikjhtvdll',
  'fontsmgyquwrgpeczikghtvdxl',
  'fonbsmjyauwrapeczbfghtvdxl',
  'ftnbsmjyquwrapecpifghtvdxl',
  'fonvsmjyqewrapeczikghlvdxl',
  'fonbsljyquwrapecziklhtvdxw',
  'fonbbmjyquwrapeczikghvadxl',
  'ponbsmjyquwrspeczikghivdxl',
  'fonbsmjcquwrapeccikghtvuxl',
  'fonbsmjnquwrapetzikghtvlxl',
  'fonbsmjymuwrapeczieghtvdxr',
  'ffnbsxnyquwrapeczikghtvdxl',
  'fonbsmjytuwrajeczzkghtvdxl',
  'fonssmjyquwhapeczikghkvdxl',
  'fonbsajyuuwrapeczikghlvdxl',
  'fonbsmjyquwrapeczihghtcixl',
  'fohbsmjyquwrapzczirghtvdxl',
  'fonbsmjyquwrapecjqnghtvdxl',
  'fonbsmjytuhrapeczihghtvdxl',
  'foabumjyquwrapeczikghtvdxz',
  'conbsmjyqtwrapeczikggtvdxl',
  'fonbsmjyiqwrapeczokghtvdxl',
  'fondsmjypuwrapeczikghtvjxl',
  'fonbswjyquwrapeczikgvtydxl',
  'fonbsmjyqqwrapeczikkhtvdbl',
  'fonbsmjyquwrapemzitghtvdsl',
  'fonbsmjyquwrspecziegxtvdxl',
  'fonbsmpyquwrgpeczikghtwdxl',
  'fodbsmjqquwrapeczmkghtvdxl',
  'fonbsmjkquwrapeczikghpvdxr',
  'fonbsmjyquwrapeczikshzvmxl',
  'fznbsmjyqulrapeczikghkvdxl',
  'fonbsmjyquwripeczikghtbdjl',
  'fcnbsmjyquzrapecyikghtvdxl',
  'ronbxmjyquwrapeczikghgvdxl',
  'fonbsmuyvuwrgpeczikghtvdxl',
  'fonbsmjyyuwraplczikghtudxl',
  'poxbsmjyqewrapeczikghtvdxl',
  'foabsmjyquwrapecziqghtvpxl',
  'ponbsmjrquwrapeczikchtvdxl',
  'fonzzmjyquwrapeczikghtvdxs',
  'wonbsmjyquwghpeczikghtvdxl',
  'fofbsejyquwrapeczikgctvdxl',
  'ponbsmjyquwrayegzikghtvdxl',
  'fonbumjyquwripeczikghtvdxf',
  'fonbsmqyquwrapeczikgftvdxv',
  'qonbsmjyquwraplczitghtvdxl',
  'fmnbsajdquwrapeczikghtvdxl',
  'fonbsrjyquwrapempikghtvdxl',
  'fonbsmjyquwrapeczikgotudxw',
  'fonbsmtyquwrapeflikghtvdxl',
  'fzqbsmjyquwrapecjikghtvdxl',
  'fdnbsmjyquwraqeclikghtvdxl',
  'fvnbsijyquwrapechikghtvdxl',
  'fovbsmjyquwsapeczikghqvdxl',
  'ffjbsmjyqgwrapeczikghtvdxl',
  'fonbsmjyquwrapeczvkhhivdxl',
  'forbamjjquwrapeczikghtvdxl',
  'fonbwmjyquwtapeyzikghtvdxl',
  'fonvsmjyquwrapeczikglnvdxl',
  'fonnsmjyguwrapeczikghtvxxl',
  'fopbsmjyquwrapeczikghtvaxz',
  'fonbsmjyquwiapeczikrhavdxl',
  'fonbsujyquwrapeczikthtvdjl',
  'fonpsmkyeuwrapeczikghtvdxl',
  'fonbsmjyquwrapeczqkgttvdxk',
  'fonbsmjyqzwrapeczikgrtddxl',
  'fokbsmjiquwrapeczikgltvdxl',
  'fonbsmjyqbwrapeczikghttdxo',
  'fonbsejyquwrapeczikghbvdal',
  'fonblmjyquwyaveczikghtvdxl',
  'fonbsmjyquwlzpepzikghtvdxl',
  'fonbsmjyqulrapbczigghtvdxl',
  'fonbsmjyxuwrapecziyghtvsxl',
  'fonbyjjyquwrapeczikghtvdxn',
  'fonbhmjyquwrapeczikghtjhxl',
  'fonbspjykuwraieczikghtvdxl',
  'aonbsmjyquwwapeczikchtvdxl',
  'fombsmjyquwyapeczikghtvdll',
  'fonbsmjynuwrapeczivgbtvdxl',
  'xonbsmjfquwrapeczikghqvdxl',
  'fonbyzjyquwzapeczikghtvdxl',
  'fbnbsmjyquwrapeczimgvtvdxl',
  'qonbsmjyquwraoeczikgftvdxl',
  'fonbsrjyquwrapeczikghtvjxm',
  'fonbsmjyquwrapxjzykghtvdxl',
  'fonbwgjyquwrapecziklhtvdxl',
  'fonjcmjyouwrapeczikghtvdxl',
  'fonbsmjyquwrapefzisuhtvdxl',
  'fonbsmjyqywrspeczikghtvnxl',
  'qonbsmjyquwrapeczlkuhtvdxl',
  'fonbsmjyqlprapeczikghtvdbl',
  'fonbsmjzquwrapedzikfhtvdxl',
  'fonbsmjyquwrapeczizghtvjxq',
  'fonbsmxyquwrrpeczikghtvcxl',
  'fonpsmjyquwoapeczikghjvdxl',
  'fonbshkyauwrapeczikghtvdxl',
  'fonbsmjysuwrapeczilghpvdxl',
  'fovwsxjyquwrapeczikghtvdxl',
  'fonbsmjyquwrppecnikghmvdxl',
  'fonbkmjyiuwrrpeczikghtvdxl',
  'gonbsmjyquwrapeczikphtudxl',
  'foncsmjyqlwrapeczimghtvdxl',
  'fonbsmjhquwrtpeczikghtvdxg',
  'fogbsmjyquarapeczikghtvdil',
  'fonbsmjyquwraperzekghwvdxl',
  'fonbstjyquwrapeczicghtedxl',
  'fonbsmjoquhrapeczikgotvdxl',
  'fonbsmjykuwrareczikgdtvdxl',
  'fonbsmjyvuwrayeczivghtvdxl',
  'fonbzmgyquwraptczikghtvdxl',
  'fonbsmjyqubrapeczikgftvdxb',
  'fonbgmjyjuwrapeczikghtvdul',
  'fonbsmjzqurrapeczikghtvfxl',
  'fonbsmjyiuwrapeczikgstvtxl',
  'fpnbstjyquwrapeczikghtvdcl',
  'fonbpmjyquwrapeczivghtndxl',
  'fonbsmjyquwrapeczilgptvvxl',
  'fonbsmjyqdwripecbikghtvdxl',
  'fonbsmjytuwgapnczikghtvdxl',
  'fonbsejyquwrapedzikghtvdml',
  'fonbsojyqdwrapeczikghtgdxl',
  'fonbsmjykuwrayeczicghtvdxl',
  'foubsmtyquwrapeczikchtvdxl',
  'fonbqmjyqukrapeyzikghtvdxl',
  'fonbsmjyquwaapenzikghtvdwl',
  'fonbsmeyquwrapeyzixghtvdxl',
  'fonusmjyquhrapeczikgytvdxl',
  'fonbsmjyquwrapwazikqhtvdxl',
  'fonwsmeyquwrapeczikghhvdxl',
  'fonmsmjyquxrspeczikghtvdxl',
  'fonqsmjyqxwrapeczikghtvdml',
  'fonfsmjyquwrapeuzikgatvdxl',
  'fonvsmjyquwrapeczikgrtvdul',
  'fonbsmayquwrapeczikihtvdxm',
  'fonbsmnyquwrapecdifghtvdxl',
  'fonbsmjyeuwraseczikghtvdxo',
  'fonbvvjyquwrapeczikghtvdxi',
  'fonbsmjyquwrapeczbkghtorxl',
  'tonbsmjyqvwrapeczikghtvdcl',
  'fonbsmjyquwrapeczhkgbtvdkl',
  'fonqsmjyquwrapenzibghtvdxl',
  'fontsmeyqudrapeczikghtvdxl',
  'qonbsmjyauwrapeczikghtvdbl',
  'fynbsmjyluwrapeczekghtvdxl',
  'fonbsmjhquwrappczikghtvdxt',
  'conbsmjyquwrapeczikahtvdxz',
  'fonbsmjyquorapeczikvftvdxl',
  'fonbsriyquwrapeczikchtvdxl',
  'yonfsmjyquwrapeczikghtvdxq',
  'fonaomjyquwrapecziwghtvdxl',
  'fonbsxsyqdwrapeczikghtvdxl',
  'fonbsqjyouwrapeczikgltvdxl',
  'fonbstsyquwraleczikghtvdxl',
  'fonbsmjyquwraoecztkghtvdsl',
  'fonbsmjyquwrapezzjkghmvdxl',
  'fonbwmjyqnwrapecpikghtvdxl',
  'fonbsmvyqbwrapeczikghtvdsl',
  'fonbsijyquwrazeczikghtvdwl',
  'fonbsmjyouwrapewzikghtldxl',
  'xonbsmjyqcwrapeczikghtvdul',
  'fonbgmjxquwrajeczikghtvdxl',
  'fokbsmjyquwrapechikghtrdxl',
  'fonbqmjyqawrapeczikghtrdxl',
  'fonbwmjzquwtapeyzikghtvdxl',
  'fonbsmjyquwrapecdikgatvdnl',
  'fonbsmjyqowrkpeczikghtvdxj',
  'fonbsmjyquwkapejzikuhtvdxl',
  'fonbsmjyquwrabeozikghtmdxl',
  'fonbsijyeuwrapeczikghtvdxh',
  'fonbsmjhquprapeczizghtvdxl',
  'fonesmjyquwrapcczikghtvdxh',
  'fonbamjyquwrapeczifrhtvdxl',
  'foabsmjyquwpapeczikghtvdxs',
  'fonbsmjyquwrapeczukghivdxh',
  'fonbsejyoulrapeczikghtvdxl',
  'fonbsmjyquwraceczikgdmvdxl',
  'eonbsmjyquerppeczikghtvdxl',
  'ffnzsmjyquwgapeczikghtvdxl',
  'donbsmyyquwrapeczirghtvdxl',
  'fjnbsmjyqufrapeczikghtwdxl',
  'fonfsmjyquwrareczigghtvdxl',
  'fonusmjyquwrapeczikgetvexl',
  'tonbsmjyqpwrapeczikghtjdxl',
  'fonbsmjhqukkapeczikghtvdxl',
  'fonbsmjyqusraseczikghtvzxl',
  'fonbsmjyquygapeczxkghtvdxl',
  'folbsmjyquwraqeczikghjvdxl',
  'fonbsmjyquwrppecjinghtvdxl',
  'fonbsmjyquwraepczhkghtvdxl',
  'fonbfmjyquwrapeczisghtrdxl',
  'fsnbsmjwqubrapeczikghtvdxl',
  'fonbspjyquwrapjczikghtedxl',
  'fowbsmjyquwrapeczikghtbdbl',
  'fonbymjyquwrapeczikghlvdrl',
  'fonbsmjyruwrapecbikghtvixl',
  'fonyqmjyqufrapeczikghtvdxl',
  'focbscjyquwrapeczmkghtvdxl',
  'fonbsmjyqtwnkpeczikghtvdxl',
  'eonbsmjyquwrameczizghtvdxl',
  'zonbsmjyqcwrapeczikghtvhxl',
  'foubsmjyquwrapehzikghtvnxl',
  'ffnbsmjyquwrapetzikghtjdxl',
  'fonbjgjyquwrapkczikghtvdxl',
  'fonbwmjyquwqapeczdkghtvdxl',
  'forbsmjyquwrapeczikkhtvdml',
  'fonbsmjyiuwrapeczivghevdxl',
  'fonbsmjyquwrapeglikghwvdxl',
  'fopgsmjyquwrapegzikghtvdxl',
  'fonbsmjyqzwrajeczikghtldxl',
  'fonbsmjyruwrapexzmkghtvdxl',
  'fonbsmjyquwrdpeczikxstvdxl',
  'fonbsmjyquwrapeezivghtvdql',
  'fonbdmjyqujsapeczikghtvdxl'
];

function part1(arr) {
  const counts = arr.map((box) => {
    return Array.from(box).reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
  });

  const contains = counts.map((count) => {
    const res = {};
    for (key in count) {
      res[count[key]] = 1;
    }
    return res;
  });

  const totals = contains.reduce((acc, boxContain) => {
    acc[2] = acc[2] + (boxContain[2] || 0);
    acc[3] = acc[3] + (boxContain[3] || 0);
    return acc;
  }, { 2: 0, 3: 0})

  return totals[2] * totals[3];
};

function part2(arr) {
  let comp;
  let matched = undefined;

  while (!matched && arr.length > 0) {
    compareTo = arr.pop();
    Array.from(arr).forEach((comparing) => {
      let match = [];
      let count = 0;
      Array.from(compareTo).find((char, index) => {
        if (char !== comparing[index]) {
          count++;
        } else {
          match.push(char);
        }
        // if (count > 1); break
      })
      if (count === 1) {
        matched = match.join('');
      }
    });
  }
  return matched;
}

console.log(part1(testValues));
console.log(part1(values));

console.log(part2(testMatches));
console.log(part2(values));
