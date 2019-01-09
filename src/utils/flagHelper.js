/*
 add:
 Bolivia
 Liberia
 Sudan
 Slovenia

  WHAT IS 'CI' ?
  'ci.svg',


  What about Great Britain ...  ? delete ?
  'gb.svg',
  'lk.svg',

  removed for size:
  rs
  me

*/

const FLAG_SERVER_HOST = 'https://futbol.alsi.app'

export const getFlagSvgPath = (country) => {
  return `${FLAG_SERVER_HOST}/flagImages/${flagMap[country]}`
}

const flagMap = {
  'Argentina': 'ar.svg',
  'Austria': 'at.svg',
  'Australia': 'au.svg',
  'Belgium': 'be.svg',
  'Bangladesh': 'bg.svg',
  'Brazil': 'br.svg',
  'Canada': 'ca.svg',
  'Switzerland': 'ch.svg',
  'Chile': 'cl.svg',
  'Cameroon': 'cm.svg',
  'China': 'cn.svg',
  'Colombia': 'co.svg',
  'Germany' :'de.svg',
  'Algeria': 'dz.svg',
  'Egypt': 'eg.svg',
  'Spain': 'es.svg',
  'France': 'fr.svg',
  'Gabon': 'ga.svg',
  'England': 'gb-eng.svg',
  'Northern Ireland': 'gb-nir.svg',
  'Scotland' :'gb-sct.svg',
  'Wales' :'gb-wls.svg',
  'Ghana': 'gh.svg',
  'Guinea': 'gn.svg',
  'Greece': 'gr.svg',
  'Guatemala': 'gt.svg',
  'Hong Kong': 'hk.svg',
  'Honduras': 'hn.svg',
  'Haiti': 'ht.svg',
  'Hungary': 'hu.svg',
  'Ireland': 'ie.svg',
  'Israel': 'il.svg',
  'Iran': 'ir.svg',
  'Iceland': 'is.svg',
  'Italy': 'it.svg',
  'Jordan': 'jo.svg',
  'Japan': 'jp.svg',
  'Kenya': 'ke.svg',
  'Korea': 'kr.svg',
  'Kazakhstan': 'kz.svg',
  'Latvia': 'lv.svg',
  'Lebanon': 'lb.svg',
  'Liberia': 'lr.svg',
  'Morocco': 'ma.svg',
  'Montenegro': 'me.svg',
  'Mali': 'ml.svg',
  'Mexico': 'mx.svg',
  'Mozambique': 'mz.svg',
  'Nigeria': 'ng.svg',
  'Nicaragua': 'ni.svg',
  'Netherlands': 'nl.svg',
  'Norway': 'no.svg',
  'New Zealand': 'nz.svg',
  'Panama': 'pa.svg',
  'Peru': 'pe.svg',
  'Pakistan': 'pk.svg',
  'Poland': 'pl.svg',
  'Puerto Rico': 'pr.svg',
  'Portugal': 'pt.svg',
  'Paraguay': 'py.svg',
  'Qatar': 'qa.svg',
  'Romania': 'ro.svg',
  'Serbia': 'rs.svg',
  'Russia': 'ru.svg',
  'Rwanda': 'rw.svg',
  'Sweden': 'se.svg',
  'Sierra Leone': 'sl.svg',
  'Senegal': 'sn.svg',
  'South Sudan': 'ss.svg',
  'Sao Tome': 'st.svg',
  'Chad': 'td.svg',
  'Tunisia': 'tn.svg',
  'Taiwan': 'tw.svg',
  'Ukraine': 'ua.svg',
  'Uganda': 'ug.svg',
  'United States': 'us.svg',
  'Uruguay': 'uy.svg',
  'Uzbekistan': 'uz.svg',
  'Venezuela': 've.svg',
  'Zambia': 'za.svg',
  'Zimbabwe': 'zw.svg',
}
