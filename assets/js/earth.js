var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    backgroundColor: '#000',
    globe: {
        baseTexture: "https://saferman.github.io/gallery/assets/img/world.topo.bathy.200401.jpg",
        heightTexture: "data-gl/asset/world.topo.bathy.200401.jpg",
        displacementScale: 0.04,
        shading: 'realistic',
        environment: 'data-gl/asset/starfield.jpg',
        realisticMaterial: {
            roughness: 0.9
        },
        postEffect: {
            enable: true
        },
        light: {
            main: {
                intensity: 5,
                shadow: true
            },
            ambientCubemap: {
                texture: 'data-gl/asset/pisa.hdr',
                diffuseIntensity: 0.2
            }
        }
    }
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}