import { SidebarDataType } from "@/types/data";

export const transformSidebarData = (graphqlData: any): SidebarDataType => {

  console.log('::::::::::::::',graphqlData);


  if (!graphqlData?.sidebarCollection?.items?.length) {
    throw new Error("No sidebar data found in Contentful response.");
  }

  const sidebar = graphqlData.sidebarCollection.items[0];

  return {
    name: sidebar.name,
    description: sidebar.description,
    image: {
      src: sidebar.image?.url ? sidebar.image.url : "",
      alt: sidebar.image?.title || "",
    },
    detailsList: (sidebar.detailsListCollection?.items || []).map((detail: any) => ({
      label: detail.label,
      text: detail.value,
    })),
    navigationList: (sidebar.miniNavListCollection?.items || []).map((navItem: any) => ({
      id: navItem.id,
      icon: navItem.icon?.type,
      text: navItem.text,
    })),
  };
};
