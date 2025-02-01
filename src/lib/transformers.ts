import { SidebarDataType } from "@/types/data";

export const transformSidebarData = (contentfulData: any): SidebarDataType => {
  if (!contentfulData || !contentfulData.items.length) {
    throw new Error('No sidebar data found in Contentful response.');
  }

  const sidebar = contentfulData.items[0].fields;

  return {
    name: sidebar.name as string,
    description: sidebar.description as string,
    image: {
      src: `https:${sidebar.image?.fields.file?.url}`,
      alt: sidebar.image?.fields.title || '',
    },
    detailsList: (sidebar.detailsList || []).map((detail: any) => ({
      label: detail.fields.label as string,
      text: detail.fields.value as string,
    })),
    navigationList: (sidebar.miniNavList || []).map((navItem: any) => ({
      id: navItem.fields.id as string,
      icon: navItem.fields.icon.fields.type as string,
      text: navItem.fields.text as string,
    })),
  };
};