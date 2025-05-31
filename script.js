const data = {
    "Arunachal Pradesh": {
      art: [
        {
          title: "Thangka Paintings",
          image: "https://www.superprof.co.in/blog/wp-content/uploads/2024/01/thangka.jpg",
          description: "Inspired by Buddhist traditions and local flora."
        },
        {
          title: "Wood Carving",
          image: "https://cpimg.tistatic.com/6749919/b/4/wood-carving-statue.jpg",
          description: "Features Mithun motifs and forest spirits."
        },
        {
          title: "Textile Weaving",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDW58Ai_mMiElRTdBz-dlI2kKMGe6sKR6PgA&s",
          description: "Uses natural dyes from local plants."
        },
        {
          title: "Mask Making",
          image: "https://tawangtourism.in/wp-content/uploads/2015/02/DSC_69351-300x300.jpg",
          description: "Represents tribal deities and nature spirits."
        },
        {
            name: "Blue Ant",
            image: "https://media.nature.com/lw1200/magazine-assets/d44151-024-00085-9/d44151-024-00085-9_27192024.png",
            description: "A unique insect found in the region, often depicted in local art."
        }
      ],
      nature: [
        {
          name: "Mithun",
          image: "https://www.researchgate.net/publication/345850491/figure/fig2/AS:957748271398917@1605356390881/A-female-Mithun-Bos-frontalis-in-her-natural-habitat.ppm",
          description: "Symbolizes wealth and features in local art."
        },
        {
          name: "Blue Poppy",
          image: "https://www.himalayanclub.org/images/hj/72/Meconopsis-gakyidiana.jpg",
          description: "A rare Himalayan flower in textile art."
        },
        {
          name: "Clouded Leopard",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepZ-hjgk1_xLomNj1QOKbeIInOMsCdDKQfw&s",
          description: "State animal, often represented in tribal motifs."
        },
        {
            name: "Rhododendron",
            image: "https://www.flowersofindia.net/catalog/slides/Grand%20Rhododendron.jpg",
            description: "State flower, used in traditional crafts."
        },
        {
            name: "Orchids",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVS4dtPkNKEr5KrzzLgHPn9kwRKKwWT_HV3g&s",
            description: "Diverse species found in the region, influencing local art."
        }
      ]
    },
    "Meghalaya": {
      art: [
        {
          title: "Bamboo Weaving",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoXDGFHH3ETAzX-HyNMiBF86bFBXwUjIz39Q&s",
          description: "Reflects patterns found in foliage."
        },
        {
          title: "Wangala Drums",
          image: "https://static.toiimg.com/thumb/msid-104983453,width-1070,height-580,resizemode-75/104983453,pt-32,y_pad-40/104983453.jpg",
          description: "Used in harvest festivals and nature cycles."
        },
        {
          title: "Shad Suk Mynsiem Dance Masks",
          image: "https://map.sahapedia.org/admin/assets/images/2022021817491588IMG_2242.jpg",
          description: "Masks representing local flora and fauna."
        },
        {
          title: "Traditional Khasi Jewelry",
          image: "https://theindiantribal.com/wp-content/uploads/2022/09/Meghalaya-Jewellery.jpg",
          description: "Incorporates motifs of local wildlife."
        }
      ],
      nature: [
        {
          name: "Orchid Rhynchostylis",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3asuaGzSC8pvulf5CZ6dTxw4kTnxly2n5RA&s",
          description: "Native orchid influences clothing designs."
        },
        {
          name: "Living Root Bridges",
          image: "https://i.natgeofe.com/n/ace1e947-3cd7-41c7-9959-0a2c825dd0c2/school-boys-living-root-bridge-meghalaya-india.jpg",
          description: "A natural marvel, often depicted in local crafts."
        },
        {
            name: "Bamboo Groves",
            image: "https://growbilliontrees.com/cdn/shop/files/grow-billion-trees-bamboo-iStock-533722075.jpg?v=1743569767&width=1500",
            description: "Integral to local art and architecture."
        },
        {
            name: "Jaintia Hills Flora",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5E5ZQAh4WuyF98gMjP5_sDlw60A_3AQGxUw&s",
            description: "Diverse plant life influencing local crafts."
        }
      ]
    }
  };
  
  function showState(state) {
    const artSection = document.getElementById('art-section');
    const natureSection = document.getElementById('nature-section');
  
    artSection.innerHTML = `<h2>${state} Art Forms</h2>` +
      data[state].art.map(art => `
        <div class="card">
          <img src="${art.image}" alt="${art.title}" />
          <h3>${art.title}</h3>
          <p>${art.description}</p>
        </div>
      `).join('');
  
    natureSection.innerHTML = `<h2>${state} Flora & Fauna</h2>` +
      data[state].nature.map(item => `
        <div class="card">
          <img src="${item.image}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      `).join('');
  }
