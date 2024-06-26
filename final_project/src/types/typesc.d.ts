interface Brand {
  code: string;
  color: string;
  imagePath: string | null;
  id: number;
  name: string;
}

interface RowData {
  id: number;
  companyname: string;
  stores: number;
  agents: number;
  brands: string;
}


interface Partner {
  id: number;
  companyName: string;
  companyWebsite: string;
  ecommerce: boolean;
  hoAddressLine1: string;
  hoCity: string;
  hoState: string;
  hoZip: string;
}

interface PageProps {
  params: {
    details: string[];
  };
}