export interface LaunchesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Launch[];
}

export interface Launch {
  id: string;
  url: string;
  name: string;
  slug: string;
  response_mode: string;
  launch_designator: string | null;
  status: LaunchStatus;
  last_updated: string;
  net: string;
  net_precision: Precision;
  window_start: string;
  window_end: string;
  image: LaunchImage | null;
  infographic: string | null;
  probability: number | null;
  weather_concerns: string | null;
  failreason: string;
  hashtag: string | null;
  launch_service_provider: Agency;
  rocket: Rocket;
  mission: Mission | null;
  pad: Pad;
  webcast_live: boolean;
  program: Program[];
  orbital_launch_attempt_count: number;
  location_launch_attempt_count: number;
  pad_launch_attempt_count: number;
  agency_launch_attempt_count: number;
  orbital_launch_attempt_count_year: number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year: number;
  agency_launch_attempt_count_year: number;
}

export interface LaunchStatus {
  id: number;
  name: string;
  abbrev: string;
  description: string;
}

export interface Precision {
  id: number;
  name: string;
  abbrev: string;
  description: string;
}

export interface LaunchImage {
  id: number;
  name: string;
  image_url: string;
  thumbnail_url: string;
  credit: string | null;
  license: ImageLicense;
  single_use: boolean;
  variants: ImageVariant[];
}

export interface ImageLicense {
  id: number;
  name: string;
  priority: number;
  link: string | null;
}

export interface ImageVariant {
  id: number;
  type: {
    id: number;
    name: string;
  };
  image_url: string;
}

export interface Agency {
  id: number;
  name: string;
  abbrev: string;
  type: AgencyType;
  url?: string;
  description?: string;
  founding_year?: number;
  administrator?: string;
  image?: LaunchImage;
  logo?: LaunchImage;
  social_logo?: LaunchImage;
  country?: Country[];
  info_url?: string;
  wiki_url?: string;
  social_media_links?: SocialMediaLink[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface AgencyType {
  id: number;
  name: string;
}

export interface Country {
  id: number;
  name: string;
  alpha_2_code: string;
  alpha_3_code: string;
  nationality_name: string;
  nationality_name_composed: string;
}

export interface SocialMediaLink {
  id: number;
  social_media: {
    id: number;
    name: string;
    url: string | null;
    logo: LaunchImage | null;
  };
  url: string;
}

export interface Rocket {
  id: number;
  configuration: RocketConfiguration;
}

export interface RocketConfiguration {
  id: number;
  name: string;
  full_name: string;
  variant: string;
  families: { id: number; name: string }[];
}

export interface Mission {
  id: number;
  name: string;
  type: string;
  description: string;
  orbit: Orbit;
  agencies: Agency[];
  info_urls: string[];
  vid_urls: string[];
  image?: LaunchImage | null;
}

export interface Orbit {
  id: number;
  name: string;
  abbrev: string;
  celestial_body: CelestialBody;
}

export interface CelestialBody {
  id: number;
  name: string;
}

export interface Pad {
  id: number;
  url: string;
  active: boolean;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  country: Country;
  map_url: string;
  wiki_url: string;
  image: LaunchImage;
  location: LaunchLocation;
}

export interface LaunchLocation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  country: Country;
  image?: LaunchImage;
  map_image?: string;
  timezone_name: string;
}

export interface Program {
  id: number;
  name: string;
  description: string;
  image?: LaunchImage;
  info_url?: string;
  wiki_url?: string;
  start_date: string;
  end_date: string | null;
  agencies: Agency[];
  type: {
    id: number;
    name: string;
  };
}
