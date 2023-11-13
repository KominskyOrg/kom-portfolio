locals {
  bucket_name = "kom-portfolio"
}

resource "aws_s3_bucket" "kom_portfolio" {
  bucket = local.bucket_name
  tags = {
    Name = local.bucket_name
  }
}

resource "aws_s3_bucket_policy" "kom_portfolio_policy" {
  bucket = aws_s3_bucket.kom_portfolio.id
  policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Sid":"AddPerm",
      "Effect":"Allow",
      "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${local.bucket_name}/*"]
    }
  ]
}
POLICY
}

resource "aws_s3_bucket_website_configuration" "kom_portfolio_web_config" {
  bucket = aws_s3_bucket.kom_portfolio.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

# resource "aws_s3_bucket_acl" "kom_portfolio_acl" {
#   bucket = aws_s3_bucket.kom_portfolio.id
#   acl    = "public-read"
# }

resource "aws_s3_bucket_versioning" "versioning_kom_portfolio" {
  bucket = aws_s3_bucket.kom_portfolio.id
  versioning_configuration {
    status = "Enabled"
  }
}
