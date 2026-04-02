import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
  Chip,
  Rating,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Hot Wheels unidade",
      image: "/assets/hotWheels.webp",
      category: "Carrinhos",
      price: "R$ 19,99",
      rating: 5,
      avaliations: 243,
      isNew: false,
      isPopular: true,
    },
    {
      id: 2,
      name: "Nerf - Lançador Alpha Strike",
      image: "/assets/nerfAlpha.webp",
      category: "Nerf",
      price: "R$ 109,90",
      rating: 5,
      avaliations: 67,
      isNew: true,
      isPopular: false,
    },
    {
      id: 3,
      name: "Boneco Minecraft - Cadres 35cm ",
      image: "/assets/cadresMinecraft.webp",
      category: "Bonecos",
      price: "R$ 89,90",
      rating: 5,
      avaliations: 126,
      isNew: true,
      isPopular: false,
    },
    {
      id: 4,
      name: "Card para Colorir Cozy e Comfy",
      image: "/assets/cozyComfy.webp",
      category: "Criatividade",
      price: "R$ 4,99",
      rating: 5,
      avaliations: 314,
      isNew: false,
      isPopular: true,
    },
    {
      id: 5,
      name: "Boneco Youtuber Enaldinho Com Pulseira Do Poder",
      image: "/assets/bonecoEnaldinho.webp",
      category: "Bonecos",
      price: "R$ 179,90",
      rating: 5,
      avaliations: 92,
      isNew: false,
      isPopular: true,
    },
    {
      id: 6,
      name: "Conjunto De Acessórios De Beleza - Hello Kitty",
      image: "/assets/acessoriosHelloKitty.webp",
      category: "Acessórios",
      price: "R$ 129,90",
      rating: 5,
      avaliations: 38,
      isNew: false,
      isPopular: false,
    },
    {
      id: 7,
      name: "Boneco Disney Stitch - Minimals",
      image: "/assets/stitchMinimals.webp",
      category: "Bonecos",
      price: "R$ 79,90",
      rating: 5,
      avaliations: 172,
      isNew: true,
      isPopular: false,
    },
    {
      id: 8,
      name: "Bicicleta Equilíbrio Totoka Infantil Totocross",
      image: "/assets/totocross.webp",
      category: "Bicicletas",
      price: "R$ 139,90",
      rating: 5,
      avaliations: 21,
      isNew: false,
      isPopular: false,
    },
  ];

  const handleWhatsApp = (productName) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o brinquedo: ${productName}`
    );
    window.open(`https://wa.me/5511915962801?text=${message}`, "_blank");
  };

  const handleWhatsAppAllProducts = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre todos os produtos que vocês tem disponíveis.`
    );
    window.open(`https://wa.me/5511915962801?text=${message}`, "_blank");
  };

  return (
    <Box sx={{ py: 8, backgroundColor: "background.paper" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            Produtos em Destaque ✨
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "text.secondary",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            Descubra nossos brinquedos mais populares e novidades mágicas que
            vão encantar crianças de todas as idades!
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={{ xs: 3, sm: 3, md: 4 }}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          {products.map((product, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}
              key={product.id}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                height: "auto",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ width: "100%", height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    maxWidth: { xs: "400px", sm: "none" },
                    minWidth: { xs: "280px", sm: "240px", md: "220px" },
                    mx: { xs: "auto", sm: 0 },
                    minHeight: { xs: "450px", sm: "480px", md: "500px" },
                    "&:hover": {
                      transform: "translateY(-12px) scale(1.02)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  {/* Badges */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    {product.isNew && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <Chip
                          label="NOVO"
                          size="small"
                          sx={{
                            backgroundColor: "success.main",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                          }}
                        />
                      </motion.div>
                    )}
                    {product.isPopular && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                      >
                        <Chip
                          icon={<TrendingUpIcon />}
                          label="POPULAR"
                          size="small"
                          sx={{
                            backgroundColor: "primary.main",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                          }}
                        />
                      </motion.div>
                    )}
                  </Box>

                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      height: {
                        xs: "300px",
                        lg: "280px",
                      },
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      p: { xs: 2, sm: 2.5, md: 3 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: { xs: "180px", sm: "200px", md: "220px" },
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: "text.primary",
                            flex: 1,
                            fontSize: {
                              xs: "1rem",
                              sm: "1.1rem",
                              md: "1.25rem",
                            },
                            lineHeight: 1.3,
                          }}
                        >
                          {product.name}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mb: 2,
                          fontWeight: 500,
                        }}
                      >
                        {product.category}
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Rating
                          value={product.rating}
                          readOnly
                          size="small"
                          sx={{ mr: 1 }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          ({product.avaliations})
                        </Typography>
                      </Box>

                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: "primary.main",
                          mb: 2,
                          fontSize: {
                            xs: "1.3rem",
                            sm: "1.4rem",
                            md: "1.5rem",
                          },
                        }}
                      >
                        {product.price}
                      </Typography>
                    </Box>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<WhatsAppIcon />}
                        onClick={() => handleWhatsApp(product.name)}
                        fullWidth
                        sx={{
                          backgroundColor: "#25D366", // theme.palette.magic.whatsapp
                          color: "white",
                          fontWeight: 600,
                          borderRadius: 2,
                          py: { xs: 1.2, sm: 1.5 },
                          fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                          "&:hover": {
                            backgroundColor: "#128C7E",
                            transform: "translateY(-2px)",
                          },
                          transition: "all 0.3s ease",
                        }}
                      >
                        Quero esse!
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Typography
              variant="h6"
              sx={{
                color: "text.secondary",
                mb: 2,
              }}
            >
              Não encontrou o que procurava?
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                startIcon={<WhatsAppIcon />}
                onClick={() => handleWhatsAppAllProducts()}
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                  fontWeight: 600,
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    borderColor: "primary.dark",
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Ver Mais Produtos
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
