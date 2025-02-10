import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
// import { basicNavbars } from "../maple/navbar/basicNavbars";

interface IComponentListing {
  featured: number;
}

interface IComponent {
  name: string;
  count: number;
  icon: string;
  featured: boolean;
}

const ComponentListing = ({ featured }: IComponentListing) => {
  const [list, setList] = useState<IComponent[] | undefined>(undefined);

  const components = useMemo(
    () => [
      {
        name: "buttons",
        count: 3,
        icon: "ri-toggle-line",
        featured: true,
      },
      {
        name: "cards",
        count: 4,
        icon: "ri-refund-line",
        featured: true,
      },
      {
        name: "headers",
        count: 2,
        icon: "ri-layout-top-line",
        featured: true,
      },
      {
        name: "footers",
        count: 2,
        icon: "ri-layout-bottom-line",
        featured: true,
      },
      {
        name: "alerts",
        count: 3,
        icon: "ri-alert-fill",
        featured: true,
      },
      {
        name: "signin",
        count: 1,
        icon: "ri-login-box-line",
        featured: true,
      },
      {
        name: "heroes",
        count: 1,
        icon: "ri-layout-top-line",
        featured: true,
      },
    ],
    []
  );

  useEffect(() => {
    if (featured != 0) {
      setList([...components.slice(0, featured)]);
    }
  }, [featured, components]);

  return (
    <div className="p-4 grid gap-4 my-1 md:grid-cols-4 xl:grid-cols-6">
      {(list || components)?.map((component) => (
        <Link
          key={component.name}
          href={`/components/${component.count ? component.name : "#"}`}
          className={`${
            !component.count ? "opacity-60 pointer-events-none" : ""
          } group component-listing-a `}
        >
          <i className={`${component.icon} text-3xl`} />
          {component.name}
          <span className="text-sm">
            {component.count > 1
              ? `${component.count} Components`
              : component.count
                ? `${component.count} Component`
                : "coming soon"}
          </span>

          <i className="ri-external-link-line absolute right-3 top-2 text-[17px] group-hover:animate-spin" />
        </Link>
      ))}
    </div>
  );
};

export default ComponentListing;
