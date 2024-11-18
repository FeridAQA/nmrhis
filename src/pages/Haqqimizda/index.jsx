import React from 'react'
import Gerb from "./../../assets/img/NMR-HIŞ.png"
import style from "./index.module.scss";
import PageTitle from '../../components/common components/PageTitle';
import HaqqimizdaSection from '../../components/haqqimizda components/HaqqimizdaSection';
import HaqqimizdaSectionForList from '../../components/haqqimizda components/HaqqimizdaSectionForList';
import { Helmet } from 'react-helmet-async';

function HaqqimizdaPage() {
  return (
    <div className={style.container}>
      <Helmet>
        <title>Haqqımızda</title>
      </Helmet>
      <PageTitle>Haqqımızda</PageTitle>
      <HaqqimizdaSection title={"Ümumi məlumat:"}>
        Yaradılma tarixi – 04.12.1921
        Ünvan – Naxçıvan şəhəri, Atatürk küçəsi 30
        1967-ci il noyabrın 17-də keçirilən təsis konfransında Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurası təşkil olunmuşdur. Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurası bir neçə təşkilatın birləşdiyi qurumdur. Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurası Azərbaycan Həmkarlar İttifaqları Konfederasiyasının ayrılmaz tərkib hissəsidir. Naxçıvan MR HİŞ həmkarlar ittifaqı üzvlərinin və digər işçilərin sosial-iqtisadi, hüquqi və mənəvi mənafelərinin müdafiəsini həyata keçirən və Naxçıvan Muxtar Respublikasının sahə həmkarlar ittifaqlarının, sahələrarası birliklərinin könüllü ittifaqıdır. Qurum üzrə muxtar respublikanın idarə və müəssisələrində 767 ilk təşkilat fəaliyyət göstərir ki, onlar da öz ətraflarında 46224 ittifaq üzvünü birləşdirir.
      </HaqqimizdaSection>
      <hr />
      <HaqqimizdaSection title={"Naxçıvan MR HİŞ-nın orqanları:"}>
        Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının ali orqanı 5 ildə bir dəfə çağırılan Konfransdır. Konfrans nümayəndələri arasında Şuranın sədri seçilir. 18 may 2023-cü il tarixdən Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının sədri Abdullayev Qəzənfər İsmayıl oğludur. Naxçıvan MR HİŞ-nın sədri Qəzənfər Abdullayev 31 iyul 2023-cü il tarixdən Naxçıvan Futbol Federasiyasının prezidentidir. Şuranın Məclisinin say tərkibi 21 nəfərdir. Cari idarəetmənin həyata keçirilməsi üçün  Məclisin tərkibindən Şuranın İcraiyyə Komitəsi seçilir. İcraiyyə Komitəsi – Məclislərarası dövründə Şuranın İcraiyyə - sərəncamçı orqanıdır. Tərkibi bütün üzv təşkilatların nümayəndələrindən və Şuranın sədri, müavini və aparatın məsul şəxslərindən ibarətdir. Onun tərkibi məclis tərəfindən təsdiq edilir. Şuranın İcraiyyə Komitəsi 9 nəfərdən ibarətdir.
      </HaqqimizdaSection>
      <hr />
      <HaqqimizdaSectionForList
        title={"Naxçıvan MR HİŞ-nın üzv təşkilatları:"}
        data={[
          "Dövlət və Bələdiyyə İdarələri İşçiləri Həmkarlar İttifaqı Naxçıvan MR Komitəsi",
          "Təhsil İşçiləri Həmkarlar İttifaqı Naxçıvan MR Komitəsi",
          "Səhiyyə İşçiləri Həmkarlar İttifaqı Naxçıvan MR Komitəsi",
          "Mədəniyyət İşçiləri Həmkarlar İttifaqı Naxçıvan MR Komitəsi",
          "Tikinti, Memarlıq, Kommunal və İctimai Xidmət Müəssisələri İşçiləri Həmkarlar İttifaqı Naxçıvan MR Komitəsi",
          "Sahibkarlıq İşçiləri Həmkarlar İttifaqı Naxçıvan MR Komitəsi",
          "Naxçıvan Muxtar Respublikası Dövlət Energetika Xidməti Həmkarlar İttifaqı Komitəsi",
          "Şərur rayon Birləşmiş Həmkarlar İttifaqı Komitəsi",
          "Ordubad rayon Birləşmiş Həmkarlar İttifaqı Komitəsi",
          "Babək rayon Birləşmiş Həmkarlar İttifaqı Komitəsi",
          "Şahbuz rayon Birləşmiş Həmkarlar İttifaqı Komitəsi",
          "Culfa rayon Birləşmiş Həmkarlar İttifaqı Komitəsi",
          "Kəngərli rayon Birləşmiş Həmkarlar İttifaqı Komitəsi",
          "Sədərək rayon Birləşmiş Həmkarlar İttifaqı Komitəsi",
          "Naxçıvan Qarnizonu Birləşmiş Həmkarlar İttifaqı Komitəsi",
          "Rabitə İşçiləri Birləşmiş Həmkarlar İttifaqı Komitəsi",
        ]}
      />
      <hr />
      <HaqqimizdaSectionForList
        title={"Naxçıvan MR HİŞ-nın tabeliyində olan təşkilatlar:"}
        data={[
          "I Ağbulaq İstirahət Mərkəzi",
          "II “Darıdağ Arsenli Su Müalicə Mərkəzi” MMC",
          "III Darıdağ Arsenli Su Müalicə və İstirahət Kompleksi",
          "IV Duzdağ hotel",
        ]}
      />
      <hr />
      <HaqqimizdaSection title={"HİŞ-in beynəlxalq əlaqələri"}>
        AHİK 17 oktyabr 2000-ci il tarixdən Beynəlxalq Həmkarlar İttifaqları Konfederasiyasının üzvüdür və bu beynəlxalq təşkilatın keçirdiyi bütün tədbirlərdə fəal iştirak edir. AHİK-in nümayəndəsi bu mötəbər beynəlxalq həmkarlar ittifaqı təşkilatının icraiyyə komitəsində təmsil olunur. AHİK 26 may 2004-cü ildən Ümumhəmkarlar İttifaqları Konfederasiyasının üzv təşkilatıdır. Elektroenergetika və Elektrotexnika Sənayesi İşçiləri Həmkarlar İttifaqı, Neft və Qaz Sənayesi İşçiləri Həmkarlar İttifaqı, “İnşaat-iş” Həmkarlar İttifaqı, Metal İşçiləri Həmkarlar İttifaqı Federasiyası Beynəlxalq “İndustry All” təşkilatının, Dəniz Nəqliyyatı İşçiləri Həmkarlar İttifaqı Beynəlxalq Nəqliyyat Federasiyasının (London), Səhiyyə işçilərinin, Yerli, Sənaye və Kommunal Məişət Müəssisələri İşçilərinin, Müdafiə Sənayesi İşçilərinin həmkarlar ittifaqları PSI-nın üzvüdürlər. Türkiyə, Fransa, Belçika, İngiltərə, Almaniya, Misir, Yaponiya, Bolqariya MDB dövlətləri, Çin Respublikası və 70-ə yaxın ölkələrin həmkarlar ittifaqları mərkəzləri ilə ikitərəfli dostluq əlaqələrindədir.
      </HaqqimizdaSection>
      <img className={`Gerb`} id={"top"} src={Gerb} />
      <img className={"Gerb"} id={"bottom"} src={Gerb} />
    </div>
  )
}

export default HaqqimizdaPage
