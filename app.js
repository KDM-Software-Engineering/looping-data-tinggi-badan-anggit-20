function runner() {

  let tinggiBadan = [150, 155, 148, 165, 170, 168, 166]
  let namaAtlet = ["Rizki", "Ambar", "Rada", "Tika", "Malik", "Nanang", "Azizah"]

  for(let i = 0; i <tinggiBadan.length; i++){
    console.log(`Atlet ${namaAtlet[i]} tinggi badannya ${tinggiBadan[i]}cm`);
  }
}
runner()



module.exports = runner