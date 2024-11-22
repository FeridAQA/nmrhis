import React, { useRef, useState } from 'react';
import SubNavbar_iki from '../../components/Subnav_iki';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './index.scss';
import { Helmet } from 'react-helmet-async';

const myArr = [
    {
        id: 1,
        title: 'Dövlət və Bələdiyyə İdarələri İşçiləri Həmkarlar İttifaqı Naxçıvan MR Komitəsi',
        text: [
            'Dövlət və Bələdiyyə İdarələri İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi 1967-ci ildə özünün təsis yığıncağını keçirərək Şuranın nəzdində fəaliyyətə başlayıb.',
            'Dövlət və Bələdiyyə İdarələri İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi Azərbaycan Respublikasının Konstitusiyasına, “Həmkarlar İttifaqları haqqında” Azərbaycan Respublikası Qanununa, həmkarlar ittifaqının fəaliyyətinə aid olan başqa qanunvericilik aktlarına və Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının Nizamnaməsinə uyğun olaraq fəaliyyət göstərir və işçilərin əmək, sosial, iqtisadi hüquqlarını və qanuni mənafelərini müdafiə etmək üçün yaradılmış müstəqil, qeyri-siyasi ictimai birlikdir.',
            'Dövlət və Bələdiyyə İdarələri İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsinin ali orqanı Konfransdır. Konfranslararası dövrdə isə Məclisdir. Məclislərarası dövrdə icraçı orqanın İcraiyyə Komitəsidir. Dövlət və Bələdiyyə İdarələri İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsinin 97 üzv təşkilatı var.',
            'Dövlət və Bələdiyyə İdarələri İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsinin nəzdində “Gender bərabərliyi siyasəti”ni həyata keçirən işçi qrupu, gənclərlə iş, idman bölmələri, əmək və sosial hüquqların müdafiəsi fəaliyyət göstərir.',
            'Dövlət və Bələdiyyə İdarələri İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının üzv təşkilatıdır.',
        ],
    },
    {
        id: 2,
        title: 'TƏHSİL İŞÇİLƏRİ HƏMKARLAR İTTİFAQI NAXÇIVAN MUXTAR RESPUBLİKA KOMİTƏSİ',
        text: [
            'Təhsil İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi 17 noyabr 1967-ci ildə təşkil olunmuş təsis konfransında Naxçıvan Həmkarlar İttifaqları Şurasının yarandığı gündən fəaliyyətini davam etdirir.',
            'Təhsil İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi Azərbaycan Respublikasının Konstitusiyasına, "Həmkarlar İttifaqı haqqında" Azərbaycan Respublikası qanununa uyğun fəaliyyət göstərir. Təhsil İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi təhsil müəssisələrində çalışan işçilərin, təhsil verən və təhsil alan şəxslərin, habelə pensiyaçıların əmək, sosial-iqtisadi hüquqlarının və qanuni mənafelərinin müdafiəsi üçün iş yeri, peşələr, sahələr üzrə və respublika səviyyəsində fərdi üzvlük prinsipi əsasında könüllü birləşdiyi, Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının Nizamnaməsi əsasında fəaliyyət göstərən ictimai, qeyri-siyasi təşkilatdır. Təhsil İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsinin tabeliyində 59 ilk təşkilat var. İttifaq üzvlərinin sayı 11779 nəfər təşkil edir. Bunlardan 6860 nəfəri gənclərdən ibarətdir.',
        ],
    },
    {
        id: 3,
        title: 'Səhiyyə İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi',
        text: [
            'Səhiyyə İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi 1967-ci ildə Naxçıvan Vilayət Həmkarlar İttifaqlar Şurasının tərkibində fəaliyyətə başlamışdır.',
            'Səhiyyə İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi Azərbaycan Respublikasının Konstitusiyasına, “Həmkarlar İttifaqı haqqında” Azərbaycan Respublikası qanununa uyğun fəaliyyət göstərir. Səhiyyə İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi ittifaq üzvlərinin iqtisadi hüquqlarını və mənafelərini müdafiə edən təşkilatdır.',
            'Səhiyyə İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsinin əhatə etdiyi Həmkarlar İttifaqı Komitəsi 13 təşkilatda 2496 ittifaq üzvünü birləşdirir.',
            'Səhiyyə İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi Naxçıvan Muxtar Respublikası həmkarlar ittifaqları Şurasının üzv təşkilatıdır.',
        ],
    },
    {
        id: 4,
        title: 'Mədəniyyət İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi',
        text: [
            'Mədəniyyət İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi 1967-ci il noyabr ayının 17-də Naxçıvan Vilayət Həmkarlar İttifaqları Şurasının yarandığı gündən fəaliyyətini davam etdirir.',
            'Mədəniyyət İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsi öz ətrafında 41 ilk təşkilatı birləşdirir. İttifaq üzvlərinin sayı 1552 nəfərdir. Bunlardan 604 nəfəri kişi, 948 nəfəri isə qadındır. Gənclər isə 257 nəfər təşkil edir.',
        ],
    },
    {
        id: 5,
        title: 'Tikinti Memarlıq Kommunal və İctimai Xidmət Müəssisələri İşçiləri Həmkarlar İttifaqi Naxçıvan Muxtar Respublikası Komitəsi',
        text: [
            'Tikinti Memarlıq Kommunal və İctimai Xidmət Müəssisələri İşçiləri Həmkarlar İttifaqi Naxçıvan Muxtar Respublikası Komitəsi 17 noyabr 1967-ci il 1 saylı Məclisin qərarı ilə yaradılıb.',
            'Tikinti Memarlıq Kommunal və İctimai Xidmət Müəssisələri İşçiləri Həmkarlar İttifaqi Naxçıvan Muxtar Respublikası Komitəsinin tərkibinə 1 komitə və 31 ilk təşkilat var. İttifaq üzvlərinin sayı 3635 nəfərdir.',
        ],
    },
    {
        id: 6,
        title: 'SAHİBKARLIQ İŞÇİLƏRİ HƏMKARLAR İTTİFAQI NAXÇIVAN MUXTAR RESPUBLİKA KOMİTƏSİ',
        text: [
            'Sahibkarlıq İşçiləri Həmkarlar İttifaqı Naxxçıvan Muxtar Respublika Komitəsi 2003-cü ilin aprel ayında Naxçıvan Muxtar Respublikasında təsis olunub. 2003-2006-cı ilin 19 iyun ayına qədər Naxçıvan Muxtar Respublikası Həmkarlar Şurasının nizamnaməsi əsasında fəaliyyət göstərib. 19 iyun 2006-cı il tarixdən etibarən Sahibkarlıq İşçiləri Həmkarlar İttifaqı Naxxçıvan Muxtar Respublikası Komitəsi fəaliyyətini müstəqil şəkildə davam etdirir.',
            'Sahibkarlıq İşçiləri Həmkarlar İttifaqı Naxçıvan Muxtar Respublika Komitəsinin tərkibində 72 ilk təşkilat mövcuddur. İttifaq üzvlərinin sayı 5135 nəfərdir. Onlardan 942 nəfəri qadın, 4193 isə kişidir. Gənclərin sayı 1093 nəfər təşkil edir.',
        ],
    },
    {
        id: 7,
        title: 'Naxçıvan Muxtar Respublikası Dövlət Energetika Xidməti Həmkarlar İttifaqı Komitəsi',
        text: [
            'Naxçıvan MSSR Nazirlər Sovetinin 21 sentyabr 1957-ci il tarixli “Azərbaycan Baş Kənd Təsərrüfatı Elektrik İdarəsinin Naxçıvan Şöbəsinin təşkili haqqında” qərar qəbul edilmiş və 1 sentyabr 1963-cü ilədək “Azkomenerji”nin Naxçıvan İstilik Energetika Stansiyası mövcud olub. Azərbaycan SSR Nazirlər Sovetinin 2 avqust 1963-cü il tarixli 540 nömrəli Sərəncamına və Azərbaycan SSR Energetika və Elektrofikasiya Baş İstehsalat İdarəsinin 13 avqust 1963-cü il tarixli 58 nömrəli əmrinə əsasən 1 sentyabr 1963-cü il tarixdən ilk dəfə Naxçıvan MSSR-də “Azbaşenerji”nin Naxçıvan Elektrik Şəbəkəsi yaradılıb. Bu müddət ərzində yaranmış strukturların “Həmkarlar şöbəsi” fəaliyyət göstərib.',
            '“Azərenerji” Dövlət Şirkətinin 17 oktyabr 1994-cü il tarixli 113 nömrəli əmri ilə  Naxçıvan Muxtar Respublikası Energetika İdarəsi yaradılıb. Elektrik İdarəsinin “Həmkarlar təşkilatı” fəaliyyət göstərib.',
            '9 avqust 2006-cı il tarixli 40-lll FR nömrəli Fərmanına əsəsən Naxçıvan Muxtar Respublikası Energetika İdarəsinin bazasında Naxçıvan Muxtar Respublikası Dövlət Energetika Agentliyi yaradılıb.',
            '10 aprel 2017-ci il tarixli 59-V FR nömrəli Fərmanına əsəsən Naxçıvan Muxtar Respublikası Dövlət Energetika Agentliyinin bazasında Naxçıvan Muxtar Respublikası Dövlət Energetika Xidməti yaradılıb.',
            '29 mart 2023-cü il tarixdən “Naxçıvan Elektrik İdarəsi Həmkarlar İttifaqı Komitəsi” VÖEN-i saxlanılmaqla yenidən “Naxçıvan Muxtar Respublikası Dövlət Energetika Xidmətinin Həmkarlar İttifaqı Komitəsi” adlandırılmış və Naxçıvan Şəhər Vergilər İdarəsində qeydiyyata alınıb.',
            'Naxçıvan Muxtar Respublikası Dövlət Energetika Xidməti Həmkarlar İttifaqı Komitəsinin 17 üzv təşkilatı, 968 nəfər ittifaq üzvü var.',
        ],
    },
    {
        id: 8,
        title: 'Şərur rayon Birləşmiş Həmkarlar İttifaqı Komitəsi',
        text: [
            'Şərur rayon Birləşmiş Həmkarlar İttifaqı Komitəsi 11 may 2010-cu il tarıxdə 1 saylı Məclisin qərarı ilə yaradılıb. Şərur rayon Birləşmiş Həmkarlar İttifaqı Komitəsinin 16 Həmkarlar İttifaqı Komitəsi və 111 ilk təşkilatı var. Şərur rayon Birləşmiş Həmkarlar İttifaqı Komitəsinin 4849 nəfər ittifaq üzvü var.',
        ],
    },
    {
        id: 9,
        title: 'Ordubad rayon Birləşmiş Həmkarlar İttifaqı Komitəsi',
        text: [
            'Naxçıvan Muxtar Respublikası Ordubad rayon Birləşmiş Həmkarlar İttifaqı Komitəsi öz üzvlərinin əmək, sosial-iaqtisadi, hüquqi, mənəvi mənafelərinin müdafiəsini təmin edən, həyata keçirən, sahə muxtar respublika təşkilatı olmaqla, ilk həmkarlar təşkilatlarının, komitələrinin, rayon (şəhər) həmkarlar ittifaqı orqanlarının, sahənin qeydiyyatında duran (müqavilə əsasında) həmkarlar ittifaqı təşkilatlarının könüllü ittifaqıdır.',
            'Ordubad rayon Birləşmiş Həmkarlar İttifaqı Komitəsi öz fəaliyyətini Azərbaycan Respublikasının, Konstitusiyasına, “Həmkarlar İttifaqları haqqında” Azərbaycan Respublikası Qanununa, Əmək Məcəlləsinə, həmkarlar ittifaqının fəaliyyətinə aid olan başqa qanunvericilik aktlarına Azərbaycan Həmkarlar İttifaqları Konfederasiyasının və Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının Nizamnaməsinə uyğun olaraq qanunvericilik aktlarına, normativ-hüquqiaktlara və bu nizamnaməyə müvafiq surətdə nizamlayır.',
            'Sahənin yaradılması haqqında Naxçıvan Muxtar Respublikası Ordubad rayon Birləşmiş Həmkarlar İttifaqı qəbul etmiş ilk həmkarlar ittifaqı təşkilatları, komitələri və rayon (şəhər) həmkarlar ittifaqı orqanları sahənin təsisçiləridir. Eyni zamanda sahə Naxçıvan Muxtar Respublika Həmkarlar İttifaqları Şurasının təsisçisidir. Sahə həmkarlar ittifaqlarının fəaliyyətinin əsasını könülülük prinsipini, üzvlərinin bərabərliyini, həmkarlar hərəkatının birliyini, üzv təşkilatların fəaliyyətinin əlaqələndirilməsini, onların hüquq və təminatlarının müdafəsinə kömək edir.',
            'Ordubad rayon Birləşmiş Həmkarlar İttifaqı Komitəsi 3 may 2010-cu ildə 1 saylı Məclisin qərarı ilə yaradılmış, və hazırda 12 komitə və 40 ilk təşkilat olaraq 3045 ittifaq üzvünü özündəbirləşdirir. Komitənin əsas məqsədi rayonda fəaliyyət göstərən dövlət və özəl müəssisələrin, təşkilatların, Ümumorta təhsil müəssisələrinin işçilərinin əmək, sosial, iqtisadi hüquqlarının və qanuni mənafelərinin müdafiəsini təmin etməkdir. Komitənin ali orqanı 5 ildən bir çağırılan seçkilərdir. Seçki dövründə ali orqan ildə iki dəfədən az olmayaraq keçirilən Məclisdir. Məclislərarası dövrdə isə icraedici orqan olan və rübdə bir dəfədən az olmayaraq çağırılan İcraiyyə Komitəsidir.',
        ],
    },
    {
        id: 10,
        title: 'Babək rayon Birləşmiş Həmkarlar İttifaqı Komitəsi',
        text: [
            'Babək rayon Birləşmiş Həmkarlar İttifaqı Komitəsi Azərbaycan Respublikasının Konstitusiyasına, “Həmkarlar İttifaqları haqqında” Azərbaycan Respublikası Qanununa, həmkarlar ittifaqının fəaliyyətinə aid olan başqa qanunvericilik aktlarına Azərbaycan Həmkarlar İttifaqları Konfederasiyasının və Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının Nizamnaməsinə uyğun olaraq yaratdıqları istehsal və qeyri-istehsal sahələrində çalışan işçilərin əmək, sosial, iqtisadi hüquqlarını və qanuni mənafelərini müdafiə etmək üçün yaradılmış müstəqil, qeyri-siyasi, ictimai birliyidir.',
            'Babək rayon Birləşmiş Həmkarlar İttifaqı Komitəsi 3 may 2010-cu ildə 1 saylı Məclisin qərarı ilə yaradılmış və hazırda 11 komitə və 78 ilk təşkilat olaraq 3525 ittifaq üzvünü özündə birləşdirir.',
        ],
    },
    {
        id: 11,
        title: 'Şahbuz rayon Birləşmiş Həmkarlar İttifaqı Komitəsi',
        text: [
            'Şahbuz rayon Birləşmiş Həmkarlar İttifaqı Komitəsi Azərbaycan Respublikasının Konstitusiyasına, “Həmkarlar İttifaqları haqqında” Azərbaycan Respublikası Qanununa, həmkarlar ittifaqının fəaliyyətinə aid olan başqa qanunvericilik aktlarına Azərbaycan Həmkarlar İttifaqları Konfederasiyasının və Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının Nizamnaməsinə uyğun olaraq yaratdıqları istehsal və qeyri-istehsal sahələrində çalışan işçilərin əmək, sosial, iqtisadi hüquqlarını və qanuni mənafelərini müdafiə etmək üçün yaradılmış müstəqil, qeyri-siyasi, ictimai birliyidir.',
            'Şahbuz rayon Birləşmiş Həmkarlar İttifaqı Komitəsi 3 may 2010-cu ildə 1 saylı Məclisin qərarı ilə yaradılıb. Hazırda 7 komitə və 60 ilk təşkilat olaraq 2183 ittifaq üzvünü özündə birləşdirir.',
            'Komitənin əsas məqsədi Şahbuz rayonunda fəaliyyət göstərən dövlət və özəl müəssisələrinin, təşkilatlarının, ümumorta təhsil müəssisələrinin işçilərinin əmək, sosial, iqtisadi hüquqlarının və qanuni mənafelərinin müdafiəsini təmin etməkdir.',
            'Komitənin  ali orqanı 5 ildən bir çağırılan seçkilərdir. Seçki dövründə ali orqan ildə iki dəfədən az olmayaraq keçirilən Məclisdir. Məclislərarası dövrdə isə icraedici orqan olan və rübdə bir dəfədən az olmayaraq çağırılan İcraiyyə Komitəsidir.',
        ],
    },
    {
        id: 12,
        title: 'Culfa rayon Birləşmiş Həmkarlar İttifaqı Komitəsi',
        text: [
            'Culfa rayon Birləşmiş Həmkarlar İttifaqı Komitəsi 3 may 2010-cu il tarixdə 1 saylı Məclisin qərarı ilə yaradılıb. Culfa rayon Birləşmiş Həmkarlar İttifaqı Komitəsinin tərkibində 12 komitə və 46 ilk təşkilat var. İttifaq üzvlərinin sayı isə 2577 nəfərdir.',
        ],
    },
    {
        id: 13,
        title: 'Kəngərli',
        text: [
        ],
    },
    {
        id: 14,
        title: 'Sədərək rayon Birləşmiş Həmkarlar İttifaqı Komitəsi',
        text: [
            'Sədərək rayon Birləşmiş Həmkarlar İttifaqı Komitəsi 5 iyun 2010-cu il tarixdə 1 sayılı məclisin qərarı ilə yaradılıb. Sədərək rayon Birləşmiş Həmkarlar İttifaqı Komitəsinin tərkibində 6 komitə və 35 ilk təşkilat var. İttifaq üzvlərinin sayı isə 1060 nəfərdir.',
        ],
    },
    {
        id: 15,
        title: 'Naxçıvan Qarnizonu Birləşmiş Həmkarlar İttifaqı Komitəsi',
        text: [
            '8 fevral 1993-cü il tarixdən Azərbaycan Respublikası Müdafiə Nazirliyinin Birləşmiş Həmkarlar İttifaqı Komitəsi yarandığı dövrdən Naxçıvan Muxtar Respublikası ərazisində fəaliyyət göstərən hərbi hissələrin mülki işçiləri Müdafiə Nazirliyinin Həmkarlar İttifaqları Komitəsində birləşiblər.',
            '01 may 2010-cü ildə Azərbaycan Respublikası Müdafiə Nazirliyinin Birləşmiş Həmkarlar İttifaqlarının tərkibindən çıxaraq Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının tərkibinə, 705 saylı hərbi hissənin Birləşmiş Həmkarlar İttifaqı Komitəsi adı ilə yaranıb.',
            '18 dekabr 2013-cü ildə Azərbaycan Respublikası Prezidentinin Sərəncamı ilə Naxçıvan Muxtar Respublikasında yerləşən 5-ci Ordu Korpusunun bazası əsasında Əlahiddə Ümumqoşun Ordu yaradılıb. Sərəncama əsasən 705 saylı hərbi hissə ləğv olunduğundan 05.01.2014-cü il tarixdən Naxçıvan Qarnizonu Birləşmiş Həmkarlar İttifaqı Komitəsi adı ilə hazırda fəaliyyətini davam etdirir.',
            'Naxçıvan Qarnizonu Birləşmiş Həmkarlar İttifaqı Komitəsi 1516 nəfər həmkarlar ittifaqı üzvünü öz ətrafında birləşdirir.',
            'Naxçıvan Qarnizonu Birləşmiş Həmkarlar İttifaqları Komitəsi seçkili orqandır.',
        ],
    },
    {
        id: 16,
        title: 'Naxçıvan Muxtar Respublikası Rabitə İşçiləri Birləşmiş Həmkarlar İttifaqı Komitəsi',
        text: [
            'Naxçıvan Muxtar Respublikası Rabitə İşçiləri Birləşmiş Həmkarlar İttifaqı Komitəsi öz üzvülərinin əmək, sosial-iqtisadi, hüqüqi, mənəvi, mənafelərinin müdafiəsini ifadə edən həmkarlar ittifaqı təşkilatıdır.',
            'Rabitə İşçiləri Birləşmiş Həmkarlar İttifaqi Komitəsi, Azərbaycan Həmkarlar İttifaqları Konfederasiyasının və Naxçıvan Muxtar Respublikası Həmkarlar İttifaqları Şurasının Nizamnaməsinə müvafiq olaraq fəaliyyət göstərir.',
            'Naxçıvan Muxtar Respublikası Rabitə İşçiləri Birləşmiş Həmkarlar İttifaqı Komitəsi 8 iyul 1998- ci ildə 1 saylı Məclis qərarı ilə yaradılmış və hazırda 13 təşkilat 977 ittifaq üzvünü özündə birləşdirir.',
        ],
    },




];


const Uzv_teskilat = () => {
    const swiperRef = useRef(null);
    const [activeId, setActiveId] = useState(null);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.realIndex; // Mövcud slaydın indeksi
        setActiveId(myArr[currentIndex]?.title); // Mövcud slaydın ID-sini təyin edir
    };

    return (
        <div id="Uzv_teskilat">
                <SubNavbar_iki></SubNavbar_iki>
            <div className="container">
                {/* <div className="new_title">
                    <p>
                        Üzv Təşkilatlar
                    </p>
                </div> */}
                {/* <div className="line"></div> */}

                {/* Üzv ID və Başlıq */}
                <div className="text">
                    {activeId ? ` ${activeId}` : 'Üzv seçilməyib'}
                </div>
                <div className="line"></div>

                {/* Swiper Slider */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={handleSlideChange}
                >
                    {myArr.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="box">
                                <div className="number">
                                    <div className="custom-prev" onClick={() => swiperRef.current?.slidePrev()}>
                                        &lt;
                                    </div>
                                    {`${myArr.length}/${item.id}`}
                                    <div className="custom-next" onClick={() => swiperRef.current?.slideNext()}>
                                        &gt;
                                    </div>
                                </div>
                                <div className="title">{item.title}</div>
                                <ul>
                                    {item.text.map((text, index) => (
                                        <li key={index}>{text}</li>
                                    ))}
                                </ul>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};


export default Uzv_teskilat;
