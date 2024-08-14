import Categories from './components/_pages/home/categories';
import Contact from './components/_pages/home/contact';
import Gallery from './components/_pages/home/gallery';
import Introduction from './components/_pages/home/introduction';
import Latest from './components/_pages/home/latest';
import Populars from './components/_pages/home/populars';
import { getCategories, getLatest, getPopulars } from './lib/actions/home';

interface Props {
  params: { section: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export const dynamic = 'force-dynamic';

const Page = async ({ searchParams }: Props) => {
  try {
    const { data: categories } = await getCategories();

    const sectionId: any = searchParams?.section || '';

    const { data: populars } = await getPopulars({
      sectionId,
    });

    const { data: latest } = await getLatest();

    return (
      <div className="grid grid-cols-1 lg:gap-24 gap-12 place-content-center">
        <Introduction />
        <Categories categories={categories} />
        <Populars populars={populars} />
        <Latest latest={latest} />
        <Contact />
        <Gallery />
      </div>
    );
  } catch (err: any) {
    throw new Error(err);
  }
};

export default Page;
