<template>
  <div>
   <div className="toolbar" style="text-align:center;">
      <label>Select GEO Projection: </label>
      <select name="projection" id="projection" :value="value" @change="handleChange">
          <option value="geoAzimuthalEqualArea">geoAzimuthalEqualArea</option>
          <option value="geoAzimuthalEquidistant">geoAzimuthalEquidistant</option>
          <option value="geoGnomonic">geoGnomonic</option>
          <option value="geoOrthographic">geoOrthographic</option>
          <option value="geoStereographic">geoStereographic</option>
          <option value="geoAlbers">geoAlbers</option>
          <option value="geoConicConformal">geoConicConformal</option>
          <option value="geoConicEqualArea">geoConicEqualArea</option>
          <option value="geoConicEquidistant">geoConicEquidistant</option>
          <option value="geoEquirectangular">geoEquirectangular</option>
          <option value="geoMercator">geoMercator</option>
          <option value="geoTransverseMercator">geoTransverseMercator</option>
          <option value="geoAiry">geoAiry</option>
          <option value="geoAitoff">geoAitoff</option>
          <option value="geoAlbers">geoAlbers</option>
          <option value="geoArmadillo">geoArmadillo</option>
          <option value="geoAugust">geoAugust</option>
          <option value="geoAzimuthalEqualArea">geoAzimuthalEqualArea</option>
          <option value="geoAzimuthalEquidistant">geoAzimuthalEquidistant</option>
          <option value="geoBaker">geoBaker</option>
          <option value="geoBerghaus">geoBerghaus</option>
          <option value="geoBoggs">geoBoggs</option>
          <option value="geoBonne">geoBonne</option>
          <option value="geoBottomley">geoBottomley</option>
          <option value="geoBromley">geoBromley</option>
          <option value="geoChamberlin">geoChamberlin</option>
          <option value="geoCollignon">geoCollignon</option>
          <option value="geoConicConformal">geoConicConformal</option>
          <option value="geoConicEqualArea">geoConicEqualArea</option>
          <option value="geoConicEquidistant">geoConicEquidistant</option>
          <option value="geoCraig">geoCraig</option>
          <option value="geoCraster">geoCraster</option>
          <option value="geoCylindricalEqualArea">geoCylindricalEqualArea</option>
          <option value="geoCylindricalStereographic">geoCylindricalStereographic</option>
          <option value="geoEckert1">geoEckert1</option>
          <option value="geoEckert2">geoEckert2</option>
          <option value="geoEckert3">geoEckert3</option>
          <option value="geoEckert4">geoEckert4</option>
          <option value="geoEckert5">geoEckert5</option>
          <option value="geoEckert6">geoEckert6</option>
          <option value="geoEisenlohr">geoEisenlohr</option>
          <option value="geoEquirectangular">geoEquirectangular</option>
          <option value="geoFahey">geoFahey</option>
          <option value="geoFoucaut">geoFoucaut</option>
          <option value="geoGilbert">geoGilbert</option>
          <option value="geoGingery">geoGingery</option>
          <option value="geoGinzburg4">geoGinzburg4</option>
          <option value="geoGinzburg5">geoGinzburg5</option>
          <option value="geoGinzburg6">geoGinzburg6</option>
          <option value="geoGinzburg8">geoGinzburg8</option>
          <option value="geoGinzburg9">geoGinzburg9</option>
          <option value="geoGnomonic">geoGnomonic</option>
          <option value="geoGringorten">geoGringorten</option>
          <option value="geoGuyou">geoGuyou</option>
          <option value="geoHammer">geoHammer</option>
          <option value="geoHammerRetroazimuthal">geoHammerRetroazimuthal</option>
          <option value="geoHealpix">geoHealpix</option>
          <option value="geoHill">geoHill</option>
          <option value="geoHomolosine">geoHomolosine</option>
          <option value="geoKavrayskiy7">geoKavrayskiy7</option>
          <option value="geoLagrange">geoLagrange</option>
          <option value="geoLarrivee">geoLarrivee</option>
          <option value="geoLaskowski">geoLaskowski</option>
          <option value="geoLittrow">geoLittrow</option>
          <option value="geoLoximuthal">geoLoximuthal</option>
          <option value="geoMercator">geoMercator</option>
          <option value="geoMiller">geoMiller</option>
          <option value="geoModifiedStereographic">geoModifiedStereographic</option>
          <option value="geoModifiedStereographicAlaska">geoModifiedStereographicAlaska</option>
          <option value="geoModifiedStereographicGs48">geoModifiedStereographicGs48</option>
          <option value="geoModifiedStereographicGs50">geoModifiedStereographicGs50</option>
          <option value="geoModifiedStereographicMiller">geoModifiedStereographicMiller</option>
          <option value="geoModifiedStereographicLee">geoModifiedStereographicLee</option>
          <option value="geoMollweide">geoMollweide</option>
          <option value="geoMtFlatPolarParabolic">geoMtFlatPolarParabolic</option>
          <option value="geoMtFlatPolarQuartic">geoMtFlatPolarQuartic</option>
          <option value="geoMtFlatPolarSinusoidal">geoMtFlatPolarSinusoidal</option>
          <option value="geoNaturalEarth">geoNaturalEarth</option>
          <option value="geoNaturalEarth2">geoNaturalEarth2</option>
          <option value="geoNellHammer">geoNellHammer</option>
          <option value="geoOrthographic">geoOrthographic</option>
          <option value="geoPatterson">geoPatterson</option>
          <option value="geoPolyconic">geoPolyconic</option>
          <option value="geoRectangularPolyconic">geoRectangularPolyconic</option>
          <option value="geoRobinson">geoRobinson</option>
          <option value="geoSatellite">geoSatellite</option>
          <option value="geoSinusoidal">geoSinusoidal</option>
          <option value="geoSinuMollweide">geoSinuMollweide</option>
          <option value="geoStereographic">geoStereographic</option>
          <option value="geoTimes">geoTimes</option>
          <option value="geoTransverseMercator">geoTransverseMercator</option>
          <option value="geoTwoPointAzimuthal">geoTwoPointAzimuthal</option>
          <option value="geoTwoPointEquidistant">geoTwoPointEquidistant</option>
          <option value="geoVanDerGrinten">geoVanDerGrinten</option>
          <option value="geoVanDerGrinten2">geoVanDerGrinten2</option>
          <option value="geoVanDerGrinten3">geoVanDerGrinten3</option>
          <option value="geoVanDerGrinten4">geoVanDerGrinten4</option>
          <option value="geoWagner4">geoWagner4</option>
          <option value="geoWagner6">geoWagner6</option>
          <option value="geoWagner7">geoWagner7</option>
          <option value="geoWiechel">geoWiechel</option>
          <option value="geoWinkel3">geoWinkel3</option>
          <option value="geoInterruptedHomolosine">geoInterruptedHomolosine</option>
          <option value="geoInterruptedSinusoidal">geoInterruptedSinusoidal</option>
          <option value="geoInterruptedBoggs">geoInterruptedBoggs</option>
          <option value="geoInterruptedSinuMollweide">geoInterruptedSinuMollweide</option>
          <option value="geoInterruptedMollweide">geoInterruptedMollweide</option>
          <option value="geoInterruptedMollweideHemispheres">geoInterruptedMollweideHemispheres</option>
          <option value="geoPolyhedral">geoPolyhedral</option>
          <option value="geoPolyhedralButterfly">geoPolyhedralButterfly</option>
          <option value="geoPolyhedralCollignon">geoPolyhedralCollignon</option>
          <option value="geoPolyhedralWaterman">geoPolyhedralWaterman</option>
          <option value="geoGringortenQuincuncial">geoGringortenQuincuncial</option>
          <option value="geoPeirceQuincuncial">geoPeirceQuincuncial</option>
      </select>
  </div>
  <v-chart
    :forceFit="true"
    :height="400"
    :padding="0"
    :scale="scale"
  >
    <v-view :data="dvGraticule">
      <v-coord
        direction="TL"
      ></v-coord>
      <v-polygon
        position="x*y"
        :style="style1"
      ></v-polygon>
    </v-view>
    <v-view :data="dv">
      <v-coord
        direction="TL"
      ></v-coord>
      <v-polygon
        position="x*y"
        :style="style2"
      ></v-polygon>
    </v-view>
  </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

  export default {
    mounted(){
      $.getJSON('/assets/data/usa.geo.json', data => {
          this.handleData(data);
      });
    },
    data() {
      return {
        ds:null,
        data: [],
        dv: [],
        dvGraticule:[],
        value: 'geoPeirceQuincuncial',
        style1:{
          fill: null,
          stroke: '#ddd',
          lineWidth:1
        },
        style2:{
          stroke: '#ddd',
          lineWidth:1
        },
        scale:[
            {
                dataKey: 'x',
                sync: true
            },
            {
                dataKey: 'y',
                sync: true
            }
        ]
      };
    },
    methods:{
      handleData (data ) { 
        this.$data.ds = new DataSet({
          state: {
              projection: this.$data.value
          }
        });
        var dv = this.$data.ds.createView('back').source(data, {
            type: 'GeoJSON'
        }).transform({
            type: 'geo.projection',
            projection: '$state.projection',
            as: ['x', 'y', 'centroidX', 'centroidY']
        });

        var dvGraticule = this.$data.ds.createView('graticule').source({
            type: 'geo-graticule'
        }).transform({
            type: 'geo.projection',
            projection: '$state.projection',
            as: ['x', 'y', 'centroidX', 'centroidY']
        });
        this.$data.data=data;
        this.$data.dvGraticule=dvGraticule;
        this.$data.dv=dv;
      },
      handleChange (e) { 
        const value = e.target.value;
        this.$data.value=value;
        this.handleData(this.$data.data); 
      }
    }
  };
</script>