import { render, screen } from "@testing-library/react";
import TheCarousel from "components/carousel/Carousel";
import LanguageCard from "components/carousel/cards/LanguageCard";

test("Carousel renders without errors", () => {
    render(<TheCarousel />);
});

test("Language Card renders with correct props", () => {
    const card = {
        id: 1,
        image: "path/to/image.jpg",
        title: "Test Title",
        text: "Test Text",
        direction: "left"
    };

    render(<LanguageCard {...card} />);

    expect(screen.getByText(card.title)).toBeInTheDocument();
    expect(screen.getByText(card.text)).toBeInTheDocument();
})