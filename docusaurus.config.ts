import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  // --- 기본 사이트 정보 ---
  title: '정진욱의 포트폴리오',
  tagline: '코딩과 성장을 사랑하는 개발자 지망생입니다.',
  favicon: 'img/favicon.svg', // 파비콘 파일명은 실제 파일에 맞게 수정해주세요.

  // --- 배포 정보 ---
  url: 'https://uk3181.altruistic-hive.org',
  baseUrl: '/',
  organizationName: 'your-github-username', // 본인의 GitHub 유저네임으로 변경해주세요.
  projectName: 'portfolio', // GitHub 레포지토리 이름으로 변경해주세요.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // --- 국제화 설정 ---
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'], // 우선 한국어만 사용하도록 설정
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/skills',
          path: './skills', 
        },
        blog: {
          showReadingTime: true,
          path: './projects',
          routeBasePath: '/projects', 
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/favicon.svg', // OG 이미지 경로
    navbar: {
      title: '정진욱 | 포트폴리오',
      logo: {
        alt: '로고',
        src: 'img/favicon.svg', // 로고 파일 경로
      },
      items: [
        {
          to: '/skills/intro', // 기술 스택 소개 페이지로 연결
          label: '기술 스택',
          position: 'left',
          activeBasePath: '/skills',
        },
        {
          to: '/projects', // 프로젝트 목록 페이지로 연결
          label: '프로젝트', 
          position: 'left',
          activeBasePath: '/projects',
        },
        {
          href: 'https://github.com/altruistic-hive', // 본인의 GitHub 프로필 링크로 변경
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '둘러보기',
          items: [
            {
              label: '기술 스택',
              to: '/skills/intro',
            },
            {
              label: '프로젝트',
              to: '/projects',
            },
          ],
        },
        {
          title: '연락하기',
          items: [
            {
              label: 'Email',
              href: 'mailto:your-email@example.com', // 본인의 이메일로 변경
            },
            {
              label: 'LinkedIn',
              href: '#', // 본인의 LinkedIn 프로필 링크로 변경
            },
          ],
        },
        {
          title: '더보기',
          items: [
            {
              label: '경북대학교',
              href: 'https://www.knu.ac.kr',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/altruistic-hive', // 본인의 GitHub 프로필 링크로 변경
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UK3181. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
