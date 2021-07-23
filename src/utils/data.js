 let technologyData = [
   {
      id: 1,
      categoryType: 'technology',
      title: `Quantum memory crystals are a step towards a futuristic internet`,
      content: `A secure quantum internet is one step closer thanks to a quantum memory made from a crystal, which could form a crucial part of a device able to transmit entangled photons over a distance of 5 kilometres. Crucially, it is entirely compatible with existing communication networks, making it suitable for real-world use.

      There has long been a vision of a quantum version of the internet, which would allow quantum computers to communicate across long distances by exchanging particles of light called photons that have been linked together with quantum entanglement, allowing them to transmit quantum states.
      
      The problem is that photons get lost when they are transmitted through long lengths of fibre-optic cable. For normal photons, this isn’t an issue, because networking equipment can simply measure and retransmit them after a certain distance, which is how normal fibre data connections work. But for entangled photons, any attempt to measure or amplify them changes their state.
      
      
      The solution to this is a procedure called quantum teleportation. This involves simultaneously measuring the state of one photon from each of two pairs of entangled photons, which effectively links the most distant two photons in the chain.
      
      
      
      Read more: https://www.newscientist.com/article/2279429-quantum-memory-crystals-are-a-step-towards-a-futuristic-internet/#ixzz6x61tEu71`,
      
      imageURL: `https://cacm.acm.org/system/assets/0004/0099/060421_ICFO_quantum_repeater.large.jpg?1622827801&1622827800`,
      writtenBy: 'Michell Jack'
   },
]

let bollywoodData = [
   {
      id: 2,
      categoryType: 'bollywood',
      imageURL: `https://images.firstpost.com/wp-content/uploads/large_file_plugin/2021/06/1622632517_PVRcinemas640.jpg?impolicy=website&width=640&height=363`,
      title: `PVR faces Rs 289.12 cr losses in fourth quarter; revenue 'severely impacted' by coronavirus shutdown, says multiplex chain`,
      content: `Multiplex operator PVR Ltd on Wednesday reported a consolidated net loss of Rs 289.12 crore in the quarter ended on 31 March as the company continued to be impacted by the COVID-19 pandemic.

      The company had posted a net loss of Rs 74.49 crore in the same quarter of last fiscal. Total income during the period under review stood at Rs 263.26 crore against Rs 661.78 crore in the corresponding quarter a year ago, PVR said in a regulatory filing.
      
      PVR said results for the quarter and year ended 31 March are not comparable with results for the quarter and year ended 31 March, 2020, as the operations were severely impacted due to COVID-19 induced lockdowns, staggered re-openings, social distancing requirements, limited content flow and low consumer confidence.
      
      "FY 2020-21 was one of the toughest years for the multiplex industry and the company was able to successfully navigate the challenges on account of COVID-19 through a continuous focus on reducing fixed costs and keeping adequate liquidity on the balance sheet," it added.
      
      PVR said even though there were no major Bollywood or Hollywood movie releases in Q4 FY 21, the Southern film industry which saw new movie releases showed a strong recovery. With the resurgence of the second wave of COVID-19 since April 2021 and the consequent shutdown of cinemas, the company said it has again started taking all necessary measures to manage its costs and preserve liquidity.
      
      PVR Chairman-cum-Managing Director Ajay Bijli said the company believes its business will bounce back stronger than ever once things start to normalise in the face of mass vaccinations that are being rolled out. As of date, no cinemas are operational due to lockdowns implemented by state governments Shares of PVR Ltd were trading 0.09 per cent higher at Rs 1,308.90 apiece on BSE.`,
      writtenBy: 'Michell Jack'
   }
]

function getData(givenData) {
   const data = []
   for(let i=0; i<=5; i++) {
      data.push(givenData)
   }
   return data
}

export const technology = getData(technologyData[0])
export const bollywood = getData(bollywoodData[0])

