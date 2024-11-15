import React from 'react';
import PageTitle from '../../components/common components/PageTitle';
import SonXeberler from '../../layout/commonlayout/SonXeberler';
import Gerb from "./../../assets/img/NMR-HIŞ.png";
import ContentBox from './Content';
import ImageBox from './Image';
import style from "./index.module.scss";
import ImageData from '../../Data/ImageData';

function XeberDetailPage() {
  return (
    <>
      <div className={style.container}>
        <PageTitle>AHIK Xəbərləri</PageTitle>
        <div className={style.xeberBox}>
          <ImageBox
            images={ImageData}
            date={"22 iyul 2024 16:07"}
          >
            Title: Tələbələr arasında keçirilmiş müsabiqə-festivalın yekun konserti olub
          </ImageBox>
          <ContentBox date={"22 iyul 2024 16:07"}>
            Content: Elm və Təhsil Nazirliyi və Azərbaycan Təhsil İşçiləri Azad Həmkarlar İttifaqı Respublika Komitəsinin (ATİAHİ RK) birgə qərarı ilə ali təhsil müəssisələrinin tələbələri arasında keçirilmiş Ümummilli Lider Heydər Əliyevin anadan olmasının 101-ci ildönümünə həsr olunan bədii yaradıcılıq müsabiqə-festivalının yekun konserti keçirilib. Tədbirdə Azərbaycan Həmkarlar İttifaqları Konfederasiyasının sədri, Milli Məclisin deputatı Səttar Möhbalıyev, Elm və Təhsil Nazirliyi Həmkarlar ittifaqı komitəsinin sədri Elnur Əliyev, ali təhsil müəssisələrinin rəhbərləri, tələbələr və digər qonaqlar iştirak ediblər. Əvvəlcə Ulu Öndər Heydər Əliyevin və şəhidlərimizin əziz xatirəsi bir dəqiqəlik sükutla yad edilib. Tədbirdə Ulu Öndər Heydər Əliyevin ötən əsrin 70-ci illərində respublikamızın həyatında gördüyü misilsiz işlərdən, o cümlədən kənd təsərrüfatı və sənaye sahəsinin inkişafında xidmətlərindən, elm və təhsilə olan diqqətindən, azərbaycanlı tələbələrin ittifaqının nüfuzlu ali təhsil müəssisələrinə oxumaq üçün göndərilməsindən, Bakıda hərbi liseyin açılmasından, ədəbiyyat və incəsənət xadimlərinə qayğısından, eləcə də müstəqil yaşamağı bacaran Azərbaycanı formalaşdırmasından danışılıb. Həmçinin Ümummilli Liderin müasir müstəqil Azərbaycanı qurmasından, xilaskarlıq missiyasından, dövlət quruculuğu strategiyasından, onun müəllifi olduğu siyasi kursun dövlətimizin başçısı cənab İlham Əliyev tərəfindən uğurlu davamı və bugünkü parlaq nəticələrindən bəhs olunub. Ardınca konsertdə ali təhsil müəssisələrinin tələbələrinin ifasında müxtəlif musiqi və rəqs nömrələri, şerlər səsləndirilib. Bədii yaradıcılıq müsabiqə-festivalına ümumilikdə respublika üzrə 26 ali təhsil müəssisəsi qatılıb. Qeyd edək ki, Ümummilli lider Heydər Əliyevin anadan olmasının ildönümü münasibətilə təşkil olunan bədii yaradıcılıq festivalı 2004-cü ildən başlayaraq hər il keçirilir. Layihənin məqsədi tələbələri milli vətənpərvərlik, mədəniyyətimizə, incəsənətimizə, milli adət-ənənələrimizə hörmət ruhunda tərbiyə etmək, onların bədii-estetik səviyyəsini yüksəltməkdir. Festival həmçinin tələbələrin mədəni həyat tərzinin formalaşdırılması işinə kömək göstərmək, incəsənət və mədəniyyətimizin ayrı-ayrı sənət növləri üzrə istedadlı gənclərin üzə çıxarılması, onların qabiliyyətlərinin inkişaf etdirilməsinə dəstək vermək məqsədi daşıyır. Eyni zamanda festivalın keçirilməsi tələbə həmkarlar ittifaqı komitələrinin tələbələrin asudə vaxtlarının səmərəli və mənalı təşkilində, tələbə gənclərin cəmiyyət tərəfindən qəbul edilməyən mənfi hallara meylinin qarşısını almağa yönəldilib
          </ContentBox>
        </div>
        <hr className={`line`} />
        <SonXeberler />
        <img className={"Gerb"} id={"bottom"} src={Gerb} />
      </div>
    </>
  )
}

export default XeberDetailPage
