import { PageDataType, SidebarDataType } from '@/types/data';

export const transformSidebarData = (graphqlData: any): SidebarDataType => {
  if (!graphqlData?.sidebarCollection?.items?.length) {
    throw new Error('No sidebar data found in Contentful response.');
  }

  const sidebar = graphqlData.sidebarCollection.items[0];

  return {
    name: sidebar.name,
    description: sidebar.description,
    image: {
      src: sidebar.image?.url ? sidebar.image.url : '',
      alt: sidebar.image?.title || '',
    },
    detailsList: (sidebar.detailsListCollection?.items || []).map(
      (detail: any) => ({
        label: detail.label,
        text: detail.value,
      })
    ),
    navigationList: (sidebar.miniNavListCollection?.items || []).map(
      (navItem: any) => ({
        id: navItem.id,
        icon: navItem.icon?.type,
        text: navItem.text,
      })
    ),
  };
};

export const transformPageData = (graphqlData: any): PageDataType => {
  const introSection = graphqlData.introSection.items[0];

  // Introduction Section
  const introduction = {
    ...{
      category: introSection.sectionWrapper?.category || '',
      heading: introSection.sectionWrapper?.heading || '',
      body: introSection.sectionWrapper?.body || '',
      categoryIcon: introSection.sectionWrapper?.categoryIcon?.type || '',
    },
    title: introSection.title,
    heroImage: {
      src: introSection.heroImage?.url,
      alt: introSection.heroImage?.title || '',
    },
    statsList: (introSection.statsListCollection?.items || []).map(
      (item: any) => ({
        quantity: item.quantity,
        text: item.text,
      })
    ),
    checkList: (introSection.checkListCollection?.items || []).map(
      (item: any) => ({
        text: item.text,
        icon: item.icon?.type || '',
      })
    ),
  };

  return { introduction };
};
