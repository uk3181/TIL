import React from 'react';
import Layout from '@theme/Layout';
import FeatureSection, {
  FeatureSectionProps,
} from '../components/FeatureSection';
import CenteredCarousel from '../components/CenteredCarousel';
import ScrollingCarousel from '../components/ScrollingCarousel';
import styles from './index.module.css';

// 포트폴리오 메인 페이지에 표시될 섹션들의 데이터
const portfolioSections: FeatureSectionProps[] = [
  {
    id: 'intro',
    size: 'big',
    contentAlign: 'bottom-left',
    title: (
      <>
        끊임없이 성장하는
        <br />
        개발자 정재욱의 이야기
      </>
    ),
    description: '경북대학교 컴퓨터학부에서 배우고 성장하며, 더 나은 세상을 만드는 기술을 꿈꿉니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: [
      { label: 'GitHub 프로필', href: 'https://github.com/altruistic-hive' },
      { label: '이력서 보기', href: '#' },
    ],
    isDark: true,
  },
  {
    id: 'knu-project',
    size: 'small',
    contentAlign: 'bottom-right',
    subtitle: 'Team Project',
    title: 'KNU-렌탈 서비스',
    description: '경북대학교 학생들을 위한 교내 물품 대여 및 관리 시스템을 개발했습니다.',
    imageUrl:
      'https://scontent-icn2-1.xx.fbcdn.net/v/t1.6435-9/81280324_2700349823354069_2418322833986813952_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kPJIA6zgHtsQ7kNvwGYcdP1&_nc_oc=AdkfPXf7YJ_UMi6wOoguUz6722t12pvpRj3foU-Ma9Nf4yRFCAcZD0oaIcV-6eGpPNQ&_nc_zt=23&_nc_ht=scontent-icn2-1.xx&_nc_gid=SrfzUeiiTrbYYF2HZ3VU5A&oh=00_AfOXM8TSZTd-LcTo-yxKYJLK0NQUQhl0ei5qn-eAIueQPQ&oe=68840CF8',
    links: [{ label: '프로젝트 보기', href: '#' }],
    isDark: true,
  },
   {
    id: 'philosophy',
    size: 'small',
    contentAlign: 'center',
    subtitle: 'My Philosophy',
    title: '함께 성장하는 개발',
    description: '문제 해결 자체를 즐기며, 동료와 지식을 나누고 함께 성장할 때 가장 큰 기쁨을 느낍니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: [{ label: '개발 이야기', href: '/projects' }],
    isDark: false,
  },
  {
    id: 'skills',
    size: 'big',
    contentAlign: 'center',
    subtitle: 'Skills',
    title: '자신 있는 기술 스택',
    description: 'React, TypeScript, Node.js를 중심으로 풀스택 개발 역량을 키워나가고 있습니다. 클린 아키텍처와 테스트 자동화에 관심이 많습니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: [{ label: '기술 스택 자세히 보기', href: '/skills/intro' }],
    isDark: true,
  },
  {
    id: 'contact',
    size: 'small',
    contentAlign: 'top-center',
    title: '언제나 열려있습니다',
    description: '새로운 기회와 즐거운 도전을 기다립니다. 편하게 연락 주세요!',
    imageUrl: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: [{ label: '메일 보내기', href: 'mailto:your-email@example.com' }],
    isDark: false,
  },
  {
    id: 'blog-post',
    size: 'small',
    contentAlign: 'bottom-left',
    subtitle: 'Tech Blog',
    title: '꾸준함의 힘',
    description: '꾸준한 기록과 공유의 중요성에 대해 이야기합니다. 기술 블로그를 운영하며 배운 점들을 정리했습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: [{ label: '블로그 가기', href: '#' }],
    isDark: false,
  },
  {
    id: 'algorithm-study',
    size: 'small',
    contentAlign: 'center-left',
    subtitle: 'Algorithm',
    title: '알고리즘 문제 풀이',
    description: 'LeetCode, 백준 온라인 저지 등에서 꾸준히 알고리즘 문제를 풀며 문제 해결 능력을 기르고 있습니다.',
    imageUrl: 'https://t1.daumcdn.net/brunch/service/user/ek03/image/BDa-dMLeGQnhdbuBVoB2seCKeu8.png',
    links: [{ label: '관련 GitHub 보기', href: '#' }],
    isDark: false,
  },
  {
    id: 'community-activity',
    size: 'small',
    contentAlign: 'bottom-center',
    subtitle: 'Community',
    title: 'GDSC KNU 활동',
    description: 'Google Developer Student Clubs 경북대학교 챕터에서 스터디와 프로젝트를 진행하며 동료들과 함께 성장하고 있습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    links: [{ label: '활동 내용 보기', href: '#' }],
    isDark: true,
  },
];

// CenteredCarousel 데이터
const centeredCarouselItems = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop',
    link: '#',
    buttonText: '자세히 보기',
    title: '성장의 기회, 오픈소스 컨트리뷰션',
    subtitle: 'Open Source',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1611095966444-98b3c2e3BE58?q=80&w=2940&auto=format&fit=crop',
    link: '#',
    buttonText: '발표 영상 보기',
    title: '교내 개발 컨퍼런스 발표',
    subtitle: 'Tech Talk',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2940&auto=format&fit=crop',
    link: '#',
    buttonText: '자세히 보기',
    title: '데이터 시각화 프로젝트',
    subtitle: 'Side Project',
  },
];

// ScrollingCarousel 데이터
const scrollingCarouselItems = [
    { imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2940&auto=format&fit=crop', link: '#', buttonText: 'UI/UX 개선' },
    { imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e6973bea99?q=80&w=2940&auto=format&fit=crop', link: '#', buttonText: '백엔드 API' },
    { imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2940&auto=format&fit=crop', link: '#', buttonText: '레트로 게임' },
    { imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2940&auto=format&fit=crop', link: '#', buttonText: '웹 개발' },
    { imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2706&auto=format&fit=crop', link: '#', buttonText: '코드 리팩토링' },
    { imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2940&auto=format&fit=crop', link: '#', buttonText: '개발 생산성' },
];

// 메인 페이지 컴포넌트
export default function Home(): JSX.Element {
  return (
    <Layout
      title="Portfolio"
      description="경북대학교 정진욱 학생의 개발자 포트폴리오"
    >
      <main className={styles.mainContainer}>
        <div className={styles.gridContainer}>
          {portfolioSections.map((props) => (
            <FeatureSection key={props.id} {...props} />
          ))}
        </div>
      
        <CenteredCarousel items={centeredCarouselItems} />
        
        <ScrollingCarousel items={scrollingCarouselItems} />

      </main>
    </Layout>
  );
}
