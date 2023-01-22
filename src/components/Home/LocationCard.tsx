import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Button, Card, Link, Stack, Typography } from "@mui/material";
import L from "leaflet";

import "./LocationCard.css";
import HotelIcon from "~icons/material-symbols/hotel?raw";
import ParkingIcon from "~icons/material-symbols/local-parking?raw";
import DrinkIcon from "~icons/ep/cold-drink?raw";

const hotelIcon = L.divIcon({
    html: HotelIcon as unknown as string,
    iconSize: [42, 42],
    className: "leaflet-marker-venue",
});

const drinkIcon = L.divIcon({
    html: DrinkIcon as unknown as string,
    iconSize: [42, 42],
    className: "leaflet-marker-venue",
});

const parkingIcon = L.divIcon({
    html: ParkingIcon as unknown as string,
    iconSize: [42, 42],
    className: "leaflet-marker-parking",
});

export const LocationCard = () => {
    return (
        <Card sx={{ borderRadius: 0 }}>
            <MapContainer
                center={[52.006934, 4.360638]}
                zoom={19}
                style={{
                    height: 550,
                    maxWidth: "100vw",
                }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[52.006905, 4.360515]} icon={hotelIcon}>
                    <Popup>
                        <Stack spacing={2}>
                            <Typography variant={"h6"}>
                                Hotel Het Arsenaal
                            </Typography>
                            <Button
                                component={Link}
                                href={"https://hotelarsenaal.nl/"}
                                target={"_blank"}
                                rel={"noopener"}
                                fullWidth
                            >
                                Hotel Website
                            </Button>
                        </Stack>
                    </Popup>
                </Marker>
                <Marker
                    position={[52.006994, 4.360852]}
                    title={"Outsite"}
                    icon={drinkIcon}
                >
                    <Popup>
                        <Stack spacing={2}>
                            <Typography variant={"h6"}>Outsite</Typography>
                            <Button
                                component={Link}
                                href={"https://outsite.nl/"}
                                target={"_blank"}
                                rel={"noopener"}
                                fullWidth
                            >
                                More
                            </Button>
                        </Stack>
                    </Popup>
                </Marker>
                <Marker
                    position={[52.01121, 4.35874]}
                    icon={drinkIcon}
                    title={"John Rabbit"}
                >
                    <Popup>
                        <Stack spacing={2}>
                            <Typography variant={"h6"}>John Rabbit</Typography>
                            <Button
                                component={Link}
                                href={"https://johnrabbit.nl/"}
                                target={"_blank"}
                                rel={"noopener"}
                                fullWidth
                            >
                                More
                            </Button>
                        </Stack>
                    </Popup>
                </Marker>
                <Marker
                    position={[52.00797, 4.36305]}
                    icon={parkingIcon}
                    title={"Zuidpoort Garage"}
                >
                    <Popup>
                        <Stack spacing={2}>
                            <Typography variant={"h6"}>
                                Zuidpoort Garage
                            </Typography>
                            <Button
                                component={Link}
                                href={"https://goo.gl/maps/k9aHk1Riuo6iT27j7"}
                                target={"_blank"}
                                rel={"noopener"}
                                fullWidth
                            >
                                Google Maps
                            </Button>
                        </Stack>
                    </Popup>
                </Marker>
            </MapContainer>
        </Card>
    );
};
